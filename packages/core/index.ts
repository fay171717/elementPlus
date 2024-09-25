import { makeInstaller } from "@elementPlus/utils";
import components from "./components";
import '@elementPlus/theme/index.css'
//把component中所有的组件注册为插件
const installer = makeInstaller(components)

export * from '@elementPlus/components'
export default installer;