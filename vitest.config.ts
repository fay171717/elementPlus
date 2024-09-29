// vitest.config.ts
/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  define:{
    PROD:JSON.stringify(false),
    DEV:JSON.stringify(false),
    TEST:JSON.stringify(true)
  },
  test: {
    globals: true,
    environment: "jsdom",
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/true/coverage/**",
      "**/coverage/**",
    ],
    setupFiles: [resolve(__dirname, "./vitest.setup.ts")],
  },
});


// "test": "vitest --coverage"
/* 
这个配置文件的主要作用是设置 Vite 和 Vitest 的配置，以支持 Vue 和 JSX 语法，并配置测试环境。
具体来说：
Vite 插件:
@vitejs/plugin-vue: 支持 Vue 单文件组件。
@vitejs/plugin-vue-jsx: 支持 Vue 中的 JSX 语法。
Vitest 配置:
globals: true: 启用全局变量，简化测试代码的编写。
environment: "jsdom": 使用 jsdom 作为测试环境，模拟浏览器环境。
 */