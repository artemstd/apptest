import { IItem, IList } from '../../components/organisms/product/types';

export interface IFetchListResponse {
    data: IList,
    meta: {
        totalPages: number
    }
}

export interface IFetchOneResponse {
    data: {
        product: IItem,
        relatedProducts?: IList
    }
}