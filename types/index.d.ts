/* eslint-disable @typescript-eslint/no-explicit-any */
type Fn<T = any, R = T> = (...arg: T[]) => R;

type PromiseFn<T = any, R = T> = (...arg: T[]) => Promise<R>;

declare type RefType<T> = T | null;

declare type LabelValueOptions = Array<{
  label: string;
  value: any;
  [key: string]: string | number | boolean;
}>;

declare type EmitType = (event: string, ...args: any[]) => void;

declare type TargetContext = "_self" | "_blank";

declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T;
}

declare type ComponentRef<T extends HTMLElement = HTMLDivElement> =
  ComponentElRef<T> | null;
