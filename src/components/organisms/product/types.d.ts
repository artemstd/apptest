import { IItemDetails, IList } from '../../../schema/product/types';
import { FormikConfig } from 'formik';

export interface IItemProps {
    product: IItemDetails
};

export interface IListProps {
    products: IList
}

export interface IOrderFormProps {
    productId: number,
    className?: string
}

interface IFormikValues {
    email: string
};

export type IFormikProps = FormikConfig<IFormikValues>;