import { useState, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Heading from '../components/atoms/typography/Heading';
import ProductList from '../components/organisms/product/List';
import { fetchList as fetchListProducts } from '../api/products';

const IndexPage = ({ startProducts, startTotal }) => {
  const [products, setProducts] = useState(startProducts);
  const [total, setTotal] = useState(startTotal);

  const loadMore = useCallback(async () => {
    const res = await fetchListProducts(products.length);
    setProducts(prevValue => [...prevValue, ...res.data]);
    setTotal(res.meta.total);
  }, [products.length]);

  return <>
    <Heading size={1} className="text-center mt-36 sm:mt-48">Star Wars<br />Figures</Heading>
    <Heading size={3} className="
      text-center
      mt-8 sm:mt-12 mx-auto mb-36 sm:mb-48 xl:mb-36
      w-11/12 sm:w-5/6 md:w-3/4 lg:w-1/2
      ">
      Find the latest products for the biggest fans of the iconic saga.
    </Heading>
    <InfiniteScroll
      dataLength={products.length}
      hasMore={total > products.length}
      next={loadMore}
      >
        <ProductList products={products} />
    </InfiniteScroll>
  </>;
};

IndexPage.defaultProps = {
  startProducts: [],
  startTotal: 0
};

export default IndexPage;

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