/// <reference types="react-scripts" />

declare namespace NodeJS {
    export interface ProcessEnv {
        REACT_APP_LOGIN_URL: string;
        REACT_APP_GATEWAY_URL: string;
        REACT_APP_SESSION_TOKEN_KEY: string;
        REACT_APP_VALIDATE_TOKEN_URL: string;
        REACT_APP_EXPORT_API: string;
        REACT_APP_SESSION_TOKEN_KEY: string;
    }
}