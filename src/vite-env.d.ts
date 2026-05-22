/// <reference types="vite/client" />
import { type ButtonStyles } from './styles/defaults/button';
import { type CommonStyles } from './styles/defaults/common';
import { type FrameStyles } from './styles/defaults/frame';
import { type PotionStyles } from './styles/defaults/potion';

declare module '*.png';
declare module '*.webp';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.woff';

declare module 'styled-components' {
  export interface DefaultTheme {
    button: ButtonStyles;
    common: CommonStyles;
    frame: FrameStyles;
    potion: PotionStyles;
  };
}
