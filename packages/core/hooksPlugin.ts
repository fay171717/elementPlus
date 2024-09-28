import {each,isFunction} from 'lodash-es'
import shell from 'shelljs'

//定义两个钩子，需要删除文件的名字
export default function hooksPlugin({
    rmFiles = [],
    beforeBuild,
    afterBuild
}:{
    rmFiles?:string[];
    beforeBuild?:Function;
    afterBuild?:Function;
}){
    return {
        name:"hooks-plugin",
        buildStart(){
            each(rmFiles,(fName)=>shell.rm("-rf",fName));
            isFunction(beforeBuild) && beforeBuild();
        },
        buildEnd(err?:Error){
            !err && isFunction(afterBuild) && afterBuild();
        }
    }
}