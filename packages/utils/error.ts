import { isString } from "lodash-es";


//组件库ui上面的报错
class ErUIError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "ErUIError";
  }
}

//告诉我们什么地方出错了
function createErUIError(scope: string, msg: string) {
  return new ErUIError(`[${scope}]:${msg}`);
}

//抛出刚定义的分析
export function throwError(scope: string, msg: string) {
  throw createErUIError(scope, msg);
}

//重载，不同的参数不同的情况
export function debugWarn(error: Error): void;
export function debugWarn(scope: string, msg: string): void;
export function debugWarn(scope: string | Error, msg?: string) {
  if (process.env.NODE_ENV !== "production") {
    const err = isString(scope) ? createErUIError(scope, msg!) : scope;
    console.warn(err);
  }
}
