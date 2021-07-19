import { ITemplateProps } from '../../components/templates/types';
import { IItem, IList } from '../../components/organisms/product/List';

export type IProductPageParams = {
    id: string
}

export interface IProductPageProps extends ITemplateProps {
    product: IItem,
    relatedProducts?: IList
}