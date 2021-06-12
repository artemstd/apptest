import { useState, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductsItem from '../components/products/Item';
import { fetchList as fetchListProducts } from '../api/products';

export default function IndexPage({ startProducts = [], startTotal = 0 }) {
  const [products, setProducts] = useState(startProducts || []);
  const [total, setTotal] = useState(startTotal);

  const loadMore = useCallback(async () => {
    const res = await fetchListProducts(products.length);
    setProducts(prevValue => prevValue.concat(res.data));
    setTotal(res.meta.total);
  }, [products]);

  let productsOutput;
  if (products.length) {
    productsOutput = <InfiniteScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-y-8 gap-x-6 xl:gap-x-8 mt-36 sm:mt-48 xl:mt-36" dataLength={products.length} hasMore={total > products.length} next={loadMore}>
      {products.map((item) => {
          return <ProductsItem key={item.id} product={item} />;
      })}
    </InfiniteScroll>
  } else {
    productsOutput = <p className="text-center">No products</p>
  }

  return <>
    <h1 className="text-center mt-36 sm:mt-48">Star Wars<br />Figures</h1>
    <h2 className="text-center mt-8 mx-auto w-11/12 sm:w-5/6 sm:mt-12 md:w-3/4 lg:w-1/2">
      Find the latest products for the biggest fans of the iconic saga.
    </h2>
    {productsOutput}
  </>;
}

export async function getServerSideProps() {
  const res = await fetchListProducts();

  return {
    props: {
      pageTitle: 'Index page',
      startProducts: res.data,
      startTotal: res.meta.total
    }
  };
}