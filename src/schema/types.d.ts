import type PreOrder from "./pre-order/dataSource";
import type Product from "./product/dataSource";

export type IDataSources = {
    product: Product,
    preOrder: PreOrder
}

export interface IContext {
    dataSources: IDataSources
}

// todo
export interface IErrorResponse {
    error?: string;
    errors?: {
        [key: string]: string
    };
}