import AbortController from 'node-abort-controller';
import { IErrorResponse, IRequestConfig } from './types';

class PromiseCustom<T> extends Promise<T> {
    cancel?: () => void
}

const apiUrl: string = process.env.API_URL;

const client = <T>(url: string, { method = 'GET', body, ...otherConfig }: IRequestConfig = {}): PromiseCustom<T> => {
    const controller = new AbortController();
    const { signal } = controller;

    const promise = new PromiseCustom<T>(async (resolve, reject) => {
        const config: RequestInit = {
            ...otherConfig,
            method,
            signal
        };
    
        if (body) {
            config.body = JSON.stringify(body);
        }
    
        let resp: Response,
            data: T | IErrorResponse;
        try {
            resp = await fetch(apiUrl + url, config);
            data = await resp.json();
            if (resp.ok) {
                return resolve(data as T);
            }
            throw new Error(resp.statusText);
        } catch(exception) {
            return reject( (data || { error: exception.message }) as IErrorResponse );
        }
    });

    promise.cancel = () => {
        controller.abort();
    };

    return promise;
};

client.get = <T>(url: string, config?: Omit<IRequestConfig, 'body'>): PromiseCustom<T> => {
    return client<T>(url, {...config, method: 'GET'});
};

client.post = <T>(url: string, body?: IRequestConfig['body'], config?: Omit<IRequestConfig, 'body'>): PromiseCustom<T> => {
    return client<T>(url, {...config, method: 'POST', body});
};

export default client;