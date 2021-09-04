import { RESTDataSource } from 'apollo-datasource-rest';
import { IFetchListResponse, IFetchOneResponse } from './types';

export default class Product extends RESTDataSource {
    baseURL = process.env.API_URL

    fetchList(page: number = 1) {
        return this.get<IFetchListResponse>(`/api/products?page=${page}`);
    }

    fetchOne(id: number = 0) {
        return this.get<IFetchOneResponse>(`/api/products/${id}`);
    }
}