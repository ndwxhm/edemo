import type {
  ComponentPublicInstance,
  FunctionalComponent,
} from "vue";

declare module "vue" {
  export type JSXComponent<Props = unknown> =
    | (new () => ComponentPublicInstance<Props>)
    | FunctionalComponent<Props>;
}
