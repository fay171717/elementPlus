import type { Placement, Options } from "@popperjs/core";

export interface TooltipProps {
  content?: string;
  trigger?: "hover" | "click" | "contextmenu";
  placement?: Placement;
  //手动触发
  manual?: boolean;
  disabled?: boolean;
  //popperjs原生的options
  popperOptions?: Partial<Options>;
  //自定义动画
  transition?: string;
  //展示演示，对于trigger做一个方便
  showTimeout?: number;
  hideTimeout?: number;
}


//定义事件
export interface TooltipEmits {
  (e: "visible-change", value: boolean): void;
  (e: "click-outside"): void; //外部做的点击
}

export interface TooltipInstance {
  show(): void;
  hide(): void;
}
