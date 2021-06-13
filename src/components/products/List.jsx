import ProductsItem from './Item';

export default function List({ products = []}) {
    if (products.length) {
        return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-y-8 gap-x-6 xl:gap-x-8">
            {products.map((item) => <ProductsItem key={item.id} product={item} />)}
        </div>
    } else {
        return <div className="text-center">No products</div>
    }
}