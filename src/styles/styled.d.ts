import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      background: string;

      textPrimary: string;
      textPrimary: string;

      grey500: string;
      grey400: string;
      grey300: string;
      grey200: string;
      grey100: string;
      white: string;
      firstType: string;
      secondType: string;
    };
  }
}
