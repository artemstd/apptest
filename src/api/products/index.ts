import client from '../client';
import { IFetchListResponse, IFetchOneResponse } from './types';

export const fetchList = (page: number = 1) => {
    return client.get<IFetchListResponse>(`/api/products?page=${page}`);
};

export const fetchOne = (id: number = 0) => {
    return client.get<IFetchOneResponse>(`/api/products/${id}`);
};