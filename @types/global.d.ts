import type {
  FunctionComponent,
  PropsWithChildren,
  JSX as ReactJSX,
} from 'react';

declare global {
  export type FC<P = Record<string, unknown>> = FunctionComponent<P>;

  export type FCWC<P = Record<string, unknown>> = FunctionComponent<
    PropsWithChildren<P>
  >;

  export type WC<P = Record<string, unknown>> = PropsWithChildren<P>;

  namespace JSX {
    type Element = ReactJSX.Element;
    type IntrinsicElements = ReactJSX.IntrinsicElements;
  }
}
