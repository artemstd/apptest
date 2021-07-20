import client from '../client';
import { ICreateParams, ICreateResponse } from './types';

export const create = (data: ICreateParams) => {
    return client.post<ICreateResponse>('/api/pre-order', {...data});
};