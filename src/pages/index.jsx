import { useState, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductsList from '../components/products/List';
import { fetchList as fetchListProducts } from '../api/products';

export default function IndexPage({ startProducts = [], startTotal = 0 }) {
  const [products, setProducts] = useState(startProducts);
  const [total, setTotal] = useState(startTotal);

  const loadMore = useCallback(async () => {
    const res = await fetchListProducts(products.length);
    setProducts(prevValue => prevValue.concat(res.data));
    setTotal(res.meta.total);
  }, [products]);

  return <>
    <h1 className="text-center mt-36 sm:mt-48">Star Wars<br />Figures</h1>
    <h2 className="
      text-center
      mt-8 mx-auto mb-36 sm:mb-48 xl:mb-36
      w-11/12 sm:w-5/6 sm:mt-12 md:w-3/4 lg:w-1/2
      ">
      Find the latest products for the biggest fans of the iconic saga.
    </h2>
    <InfiniteScroll
      dataLength={products.length}
      hasMore={total > products.length}
      next={loadMore}
      >
        <ProductsList products={products} />
    </InfiniteScroll>
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