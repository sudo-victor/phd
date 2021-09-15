import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      inputBackground: string;
      label: string;

      white: string;

      gray: string;

      yellow: string;

      green: string;
      greenSecondary: string;
      greenLinear: string[];

      red: string;
      redLinear: string[];

      brown: string;
    };
  }
}
