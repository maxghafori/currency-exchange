import 'styled-components/native';

declare module 'styled-components/native' {
    export interface DefaultTheme {
        colors: {
            background: string,
            primaryColor: string,
            secondaryColor: string,
            primaryTextColor: string,
            secondaryTextColor: string,
        };
    }
}
