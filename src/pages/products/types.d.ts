import { IBasePageProps } from '../types';

export type IProductPageParams = {
    id: string
}

export interface IProductPageProps extends IBasePageProps {
    id: number
}