import makeInstaller  from "./makeInstaller";
import components from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons"
import '@elementPlus/theme/index.css'
import printLogo from "./printLogo";

printLogo()
library.add(fas);

//把component中所有的组件注册为插件
const installer = makeInstaller(components);



export * from '@elementPlus/components'
export * from '@elementPlus/locale'
export default installer;

