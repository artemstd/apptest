import client from './client';

interface ICreateParams {
    productId: number,
    email: string
};

interface ICreateResponse {
    data: {
        message: string
    }
}

export const create = (data: ICreateParams) => {
    return client.post<ICreateResponse>('/api/pre-order', {...data});
};