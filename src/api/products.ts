import client from './client';
import { IItem } from '../components/organisms/product/Item';
import { IList } from '../components/organisms/product/List';

interface IFetchListResponse {
    data: IList,
    meta: {
        totalPages: number
    }
}

interface IFetchOneResponse {
    data: {
        product: IItem,
        relatedProducts: IList
    }
}

export const fetchList = (page: number = 1) => {
    return client.get<IFetchListResponse>(`/api/products?page=${page}`);
};

export const fetchOne = (id: number = 0) => {
    return client.get<IFetchOneResponse>(`/api/products/${id}`);
};