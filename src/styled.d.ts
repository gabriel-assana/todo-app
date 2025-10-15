import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      border: string;
      buttonBg: string;
      buttonText: string;
      buttonHoverBg: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: string;
  }
}
