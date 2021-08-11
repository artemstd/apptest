export interface IItem {
    id: number,
    image: string,
    name: string,
    shortDescription: string,
    description: string,
    price: number
};

export type IList = IItem[];

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