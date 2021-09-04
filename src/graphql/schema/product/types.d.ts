export interface IItem {
    id: number,
    image: string,
    name: string,
    shortDescription: string,
    price: number
};

export interface IItemDetails extends IItem {
    description: string
}

export type IList = IItem[];

export interface IFetchListResponse {
    data: IList,
    meta: {
        totalPages: number
    }
}

export interface IFetchOneResponse {
    data: {
        product: IItemDetails,
        relatedProducts?: IList
    }
}