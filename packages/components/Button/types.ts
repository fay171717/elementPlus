import type { Component, ComputedRef, Ref } from "vue";
//表示按钮可以拥有的几种不同的样式或语义类型
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
//这是原生HTML按钮元素的type属性值，
export type NativeType = "button" | "reset" | "submit";
//表示按钮大小的字符串字面量类型
export type ButtonSize = "large" | "default" | "small";

//定义了按钮组件接受的所有属性及其默认值
export interface ButtonProps {
  /**
   * @property tag
   * @type string|Component
   * @description 自定义元素标签
   * @default "button"
   */
  tag?: string | Component;
  /**
   * @property type
   * @type ButtonType
   * @description 按钮类型
   * @default "info"
   */
  type?: ButtonType;
  /**
   * @description 按钮尺寸
   * @default "-"
   */
  size?: ButtonSize;
  /**
   * @description 原生 type 属性
   * @default "button"
   * @type 'button'|'reset'|'submit'
   */
  nativeType?: NativeType;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否为加载中状态
   * @default false
   */
  loading?: boolean;
  /**
   * @description 按钮图标
   * @default "-"
   */
  icon?: string;
  /**
   * @description 是否为圆形按钮
   * @default false
   */
  circle?: boolean;
  /**
   * @description 是否为朴素按钮
   * @default false
   */
  plain?: boolean;
  /**
   * @description 是否为圆角按钮
   * @default false
   */
  round?: boolean;
  /**
   * @description 自定义加载中状态图标组件
   * @default "spinner"
   */
  loadingIcon?: string;
  /**
   * @description 自动聚焦(原生`autofocus`属性)
   * @default false
   */
  autofocus?: boolean;
  /**
   * @description 是否开启节流
   * @default true
   */
  useThrottle?: boolean;
  /**
   * @description 节流模式下，节流时间间隔(ms)
   * @default 500
   */
  throttleDuration?: number;
}

//按钮组属性
export interface ButtonGroupProps {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

export interface ButtonGroupContext {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

/**
 * @group Button
 */
//按钮组件可以触发的事件
export interface ButtonEmits {
  (e: "click", val: MouseEvent): void;
}

/**
 * @group Button
 */
//这个接口描述了使用该按钮组件时可以访问到的一些内部状态或引用，比如ref指向实际DOM元素的引用，
//disabled、size和type是计算后的属性值。
export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
  disabled: ComputedRef<boolean>;
  size: ComputedRef<ButtonSize | "">;
  type: ComputedRef<ButtonType | "">;
}
