import { makeInstaller } from "@elementPlus/utils";
import components from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import '@elementPlus/theme/index.css'

library.add(fas);

//把component中所有的组件注册为插件
const installer = makeInstaller(components)



export * from '@elementPlus/components'
export default installer;

