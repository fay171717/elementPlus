import {defineConfig, Terser} from "vite"
import vue from "@vitejs/plugin-vue";
import {resolve} from "path"
import { readdirSync, readdir } from "fs";
import { delay, defer, filter, map } from "lodash-es";
import dts from "vite-plugin-dts"
import shell from 'shelljs'
import { readFileSync } from "fs";
import hooks from "./hooksPlugin";
import terser from '@rollup/plugin-terser'

const TRY_MOVE_STYLES_DELAY = 800 as const;
const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";
//把theme移出来
function moveStyles() {
  readdir("./dist/es/theme", (err) => {
    if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
    defer(() => shell.mv("./dist/es/theme", "./dist"));
  });
}

function getDirectoriesSync(basePath: string) {
    const entries = readdirSync(basePath, { withFileTypes: true });
  
    return map(
      filter(entries, (entry) => entry.isDirectory()),
      (entry) => entry.name
    );
  }

export default defineConfig({
    plugins:[
        vue(),
        dts({
            tsconfigPath:"../../tsconfig.build.json",
            outDir:"dist/types"
        }),
        hooks({
          rmFiles:['./dist/es','./dist/theme','./dist/types'],
          afterBuild:moveStyles
        }),
        terser({
          compress: {
            //分号
            sequences: isProd,
            //参数
            arguments: isProd,
            //log删掉
            drop_console: isProd && ["log"],
            drop_debugger: isProd,
            //压缩的次数
            passes: isProd ? 4 : 1,
            global_defs: {
              "@DEV": JSON.stringify(isDev),
              "@PROD": JSON.stringify(isProd),
              "@TEST": JSON.stringify(isTest),
            },
          },
          format: {
            semicolons: false,
            shorthand: isProd,
            braces: !isProd,
            beautify: !isProd,
            comments: !isProd,
          },
          mangle: {
            toplevel: isProd,
            eval: isProd,
            keep_classnames: isDev,
            
            keep_fnames: isDev,
          },
        })
        
    ],
    
    build:{
        outDir:'dist/es',
        cssCodeSplit:true,
        minify:false,
        lib:{
            entry:resolve(__dirname,"./index.ts"),
            name:"elementPlus",
            fileName:"index",
            formats:["es"],
    },
    rollupOptions:{
        external:[
            "vue",
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-solid-svg-icons",
            "@fortawesome/vue-fontawesome",
            "@popperjs/core",
            "async-validator",
        ],

        output:{
            assetFileNames:(assetInfo)=>{
                if(assetInfo.name === "style.css") return "index.css";
                if(
                  assetInfo.type === "asset" &&
                  /\.(css)$/i.test(assetInfo.name as string)
                ){
                  return 'theme/[name].[ext]'
                }
                return assetInfo.name as string;
            },
            //分包
            manualChunks(id){
                if (id.includes("node_modules")) {
                    return "vendor";
                  }
                  if (id.includes("/packages/hooks")) {
                    return "hooks";
                  }
                  if (
                    id.includes("/packages/utils") ||
                    id.includes("plugin-vue:export-helper")
                  )
                   return "utils";
                
                if(id.includes("plugin-vue:export-helper")){
                  return "test"
                }
                  for (const dirName of getDirectoriesSync("../components")) {
                    if (id.includes(`/packages/components/${dirName}`)) {
                      return dirName;
                    }
                  }
            }
        },
        
    }
    
    }
    
})