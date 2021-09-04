export interface ICreateParams {
    productId: number,
    email: string
};

export interface ICreateResponse {
    data: {
        message: string
    }
}