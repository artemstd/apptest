import { IItem, IList } from '../../../api/products/types';
import { FormikConfig } from 'formik';

export interface IItemProps {
    product: IItem
};

export type IListPages = (IItem | IList)[];

export interface IListProps {
    products: IListPages
}

export interface IOrderFormProps {
    productId: number,
    className?: string
}

interface IFormikValues {
    email: string
};

export type IFormikProps = FormikConfig<IFormikValues>;