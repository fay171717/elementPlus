import type { App } from "vue";
import { ElementPlusContainer } from "vitepress-preview-component";
import DefaultTheme from "vitepress/theme";
import elementPlus from "elementPlus";

import "vitepress-preview-component/style.css";
import "elementPlus/dist/index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(elementPlus);
  },
};
