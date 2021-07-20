interface IRequestPartialConfig {
    body?: {
        [key: string]: string | number | boolean | void
    }
}

export type IRequestConfig = Omit<RequestInit, keyof IRequestPartialConfig> & IRequestPartialConfig;

export interface IErrorResponse {
    error?: string;
    errors?: {
        [key: string]: string
    };
}