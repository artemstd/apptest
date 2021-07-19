import { FC, memo } from 'react';
import ProductItem, { IItem } from './Item';

type IList = IItem[];

type IListPages = (IItem | IList)[];

interface IListProps {
    products: IListPages
}

const MapList = (products: IListPages) => products.map(item => item instanceof Array ? MapList(item) : <ProductItem key={item.id} product={item} />);

const List: FC<IListProps> = ({ products }) => {
    if (products.length) {
        return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-y-8 gap-x-6 xl:gap-x-8">
            { MapList(products) }
        </div>
    } else {
        return <div className="text-center">No products</div>
    }
}

export default memo(List);

export type { IItem, IList };