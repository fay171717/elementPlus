import type { App, Plugin } from "vue";

//既是插件也是组件
type SFCWithInstall<T> = T & Plugin;


//用于将一个 Vue 组件转换为一个插件，使其可以通过 app.use() 全局注册。适用于需要在多个地方使用的通用组件。
export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name;//创建组件的名字
    app.component(name, component as Plugin);//将组件注册为全局组件
  };

  return component as SFCWithInstall<T>;
};

//把函数转换成插件
export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    //使用 app.config.globalProperties 将 fn 添加到 Vue 应用程序的全局属性中，键名为 name。
    app.config.globalProperties[name] = fn;
  };
  return fn as SFCWithInstall<T>;
};
