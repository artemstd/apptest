import { RESTDataSource } from 'apollo-datasource-rest';
import { ICreateParams, ICreateResponse } from './types';

export default class PreOrder extends RESTDataSource {
    baseURL = process.env.API_URL

    create(data: ICreateParams) {
        return this.post<ICreateResponse>('/api/pre-order', {...data});
    };
}