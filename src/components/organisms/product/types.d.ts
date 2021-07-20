import { FormikConfig } from 'formik';

export interface IItem {
    id: number,
    image: string,
    name: string,
    shortDescription: string,
    description: string,
    price: number
};

export interface IItemProps {
    product: IItem
};

export type IList = IItem[];

export type IListPages = (IItem | IList)[];

export interface IListProps {
    products: IListPages
}

export interface IOrderFormProps {
    productId: number,
    className?: string
} 

export type IFormikProps = FormikConfig<{
    email: string
}>;