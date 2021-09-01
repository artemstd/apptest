import { FC, memo } from 'react';
import ProductItem from './Item';
import { IListProps } from './types';

const List: FC<IListProps> = ({ products }) => {
    if (products.length) {
        return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-y-8 gap-x-6 xl:gap-x-8">
            { products.map(item => <ProductItem key={item.id} product={item} />) }
        </div>
    } else {
        return <div className="text-center">No products</div>
    }
}

export default memo(List);