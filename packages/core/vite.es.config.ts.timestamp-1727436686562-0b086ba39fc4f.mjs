// vite.es.config.ts
import { defineConfig } from "file:///D:/Desktop/elementPlus/node_modules/.pnpm/vite@5.1.4_@types+node@20.11.20/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Desktop/elementPlus/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.4_@types+node@20.11.20__vue@3.4.19_typescript@5.2.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import { readdirSync } from "fs";
import { filter, map } from "file:///D:/Desktop/elementPlus/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import dts from "file:///D:/Desktop/elementPlus/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.11.20_rollup@4.22.4_typescript@5.6.2_vite@5.4.8_@types+node@20.11.20_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\Desktop\\elementPlus\\packages\\core";
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
var vite_es_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types"
    })
  ],
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "elementPlus",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          return assetInfo.name;
        },
        //分包
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (id.includes("/packages/utils") || id.includes("plugin-vue:export-helper")) {
            return "utils";
          }
          for (const dirName of getDirectoriesSync("../components")) {
            if (id.includes(`/packages/components/${dirName}`)) {
              return dirName;
            }
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXNrdG9wXFxcXGVsZW1lbnRQbHVzXFxcXHBhY2thZ2VzXFxcXGNvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERlc2t0b3BcXFxcZWxlbWVudFBsdXNcXFxccGFja2FnZXNcXFxcY29yZVxcXFx2aXRlLmVzLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRGVza3RvcC9lbGVtZW50UGx1cy9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gXCJ2aXRlXCJcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSBcInBhdGhcIlxyXG5pbXBvcnQgeyByZWFkZGlyU3luYywgcmVhZGRpciB9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeyBkZWxheSwgZGVmZXIsIGZpbHRlciwgbWFwIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldERpcmVjdG9yaWVzU3luYyhiYXNlUGF0aDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gcmVhZGRpclN5bmMoYmFzZVBhdGgsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KTtcclxuICBcclxuICAgIHJldHVybiBtYXAoXHJcbiAgICAgIGZpbHRlcihlbnRyaWVzLCAoZW50cnkpID0+IGVudHJ5LmlzRGlyZWN0b3J5KCkpLFxyXG4gICAgICAoZW50cnkpID0+IGVudHJ5Lm5hbWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6W1xyXG4gICAgICAgIHZ1ZSgpLFxyXG4gICAgICAgIGR0cyh7XHJcbiAgICAgICAgICAgIHRzY29uZmlnUGF0aDpcIi4uLy4uL3RzY29uZmlnLmJ1aWxkLmpzb25cIixcclxuICAgICAgICAgICAgb3V0RGlyOlwiZGlzdC90eXBlc1wiXHJcbiAgICAgICAgfSlcclxuICAgIF0sXHJcbiAgICBidWlsZDp7XHJcbiAgICAgICAgb3V0RGlyOidkaXN0L2VzJyxcclxuICAgICAgICBsaWI6e1xyXG4gICAgICAgICAgICBlbnRyeTpyZXNvbHZlKF9fZGlybmFtZSxcIi4vaW5kZXgudHNcIiksXHJcbiAgICAgICAgICAgIG5hbWU6XCJlbGVtZW50UGx1c1wiLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTpcImluZGV4XCIsXHJcbiAgICAgICAgICAgIGZvcm1hdHM6W1wiZXNcIl0sXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczp7XHJcbiAgICAgICAgZXh0ZXJuYWw6W1xyXG4gICAgICAgICAgICBcInZ1ZVwiLFxyXG4gICAgICAgICAgICBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiLFxyXG4gICAgICAgICAgICBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiLFxyXG4gICAgICAgICAgICBcIkBmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWVcIixcclxuICAgICAgICAgICAgXCJAcG9wcGVyanMvY29yZVwiLFxyXG4gICAgICAgICAgICBcImFzeW5jLXZhbGlkYXRvclwiLFxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICAgIG91dHB1dDp7XHJcbiAgICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOihhc3NldEluZm8pPT57XHJcbiAgICAgICAgICAgICAgICBpZihhc3NldEluZm8ubmFtZSA9PT0gXCJzdHlsZS5jc3NcIikgcmV0dXJuIFwiaW5kZXguY3NzXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWUgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL1x1NTIwNlx1NTMwNVxyXG4gICAgICAgICAgICBtYW51YWxDaHVua3MoaWQpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidmVuZG9yXCI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwiL3BhY2thZ2VzL2hvb2tzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9va3NcIjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgaWQuaW5jbHVkZXMoXCIvcGFja2FnZXMvdXRpbHNcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICBpZC5pbmNsdWRlcyhcInBsdWdpbi12dWU6ZXhwb3J0LWhlbHBlclwiKVxyXG4gICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1dGlsc1wiO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGlyTmFtZSBvZiBnZXREaXJlY3Rvcmllc1N5bmMoXCIuLi9jb21wb25lbnRzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKGAvcGFja2FnZXMvY29tcG9uZW50cy8ke2Rpck5hbWV9YCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UyxTQUFRLG9CQUFtQjtBQUN6VSxPQUFPLFNBQVM7QUFDaEIsU0FBUSxlQUFjO0FBQ3RCLFNBQVMsbUJBQTRCO0FBQ3JDLFNBQXVCLFFBQVEsV0FBVztBQUMxQyxPQUFPLFNBQVM7QUFMaEIsSUFBTSxtQ0FBbUM7QUFRekMsU0FBUyxtQkFBbUIsVUFBa0I7QUFDMUMsUUFBTSxVQUFVLFlBQVksVUFBVSxFQUFFLGVBQWUsS0FBSyxDQUFDO0FBRTdELFNBQU87QUFBQSxJQUNMLE9BQU8sU0FBUyxDQUFDLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFBQSxJQUM5QyxDQUFDLFVBQVUsTUFBTTtBQUFBLEVBQ25CO0FBQ0Y7QUFFRixJQUFPLHlCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFRO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDQSxjQUFhO0FBQUEsTUFDYixRQUFPO0FBQUEsSUFDWCxDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsT0FBTTtBQUFBLElBQ0YsUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLE1BQ0EsT0FBTSxRQUFRLGtDQUFVLFlBQVk7QUFBQSxNQUNwQyxNQUFLO0FBQUEsTUFDTCxVQUFTO0FBQUEsTUFDVCxTQUFRLENBQUMsSUFBSTtBQUFBLElBQ3JCO0FBQUEsSUFDQSxlQUFjO0FBQUEsTUFDVixVQUFTO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDSjtBQUFBLE1BRUEsUUFBTztBQUFBLFFBQ0gsZ0JBQWUsQ0FBQyxjQUFZO0FBQ3hCLGNBQUcsVUFBVSxTQUFTLFlBQWEsUUFBTztBQUMxQyxpQkFBTyxVQUFVO0FBQUEsUUFDckI7QUFBQTtBQUFBLFFBRUEsYUFBYSxJQUFHO0FBQ1osY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQzdCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksR0FBRyxTQUFTLGlCQUFpQixHQUFHO0FBQ2xDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQ0UsR0FBRyxTQUFTLGlCQUFpQixLQUM3QixHQUFHLFNBQVMsMEJBQTBCLEdBQ3RDO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQ0EscUJBQVcsV0FBVyxtQkFBbUIsZUFBZSxHQUFHO0FBQ3pELGdCQUFJLEdBQUcsU0FBUyx3QkFBd0IsT0FBTyxFQUFFLEdBQUc7QUFDbEQscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFFBQ047QUFBQSxNQUNKO0FBQUEsSUFFSjtBQUFBLEVBRUE7QUFFSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
