interface IRequestPartialConfig {
    body?: {
        [key: string]: string | number | boolean | void
    }
}

type IRequestConfig = Omit<RequestInit, keyof IRequestPartialConfig> & IRequestPartialConfig;

interface IErrorResponse {
    error?: string;
    errors?: {
        [key: string]: string
    };
}

const apiUrl: string = 'https://react-test-starwars.vercel.app';

const client = async <T>(url: string, { method = 'GET', body, ...otherConfig }: IRequestConfig = {}): Promise<T> => {
    const config: RequestInit = {
        ...otherConfig,
        method,
        headers: {
            'Content-Type': 'application/json',
            ...otherConfig.headers
        }
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    let resp: Response,
        data;
    try {
        resp = await fetch(apiUrl + url, config);
        data = await resp.json();
        if (resp.ok) {
            return data as T;
        }
        throw new Error(resp.statusText);
    } catch(exception) {
        return Promise.reject( (data || { error: exception.message }) );
    }
};

client.get = <T>(url: string, config?: Omit<IRequestConfig, 'body'>): Promise<T> => {
    return client<T>(url, {...config, method: 'GET'});
};

client.post = <T>(url: string, body?: IRequestConfig['body'], config?: Omit<IRequestConfig, 'body'>): Promise<T> => {
    return client<T>(url, {...config, method: 'POST', body});
};

export default client;

export type { IErrorResponse };