import { useState, useCallback } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { ITemplateProps } from '../components/templates/types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Heading from '../components/atoms/typography/Heading';
import ProductList, { IList } from '../components/organisms/product/List';
import { fetchList as fetchListProducts } from '../api/products';

interface IIdexPageProps extends ITemplateProps {
  startProducts: IList;
  startTotalPages: number
};

const IndexPage: NextPage<IIdexPageProps> = ({ startProducts, startTotalPages }) => {
  const [products, setProducts] = useState(startProducts);
  const [totalPages, setTotalPages] = useState(startTotalPages);
  const [page, setPage] = useState(1);

  const loadMore = useCallback(async () => {
    const nextPage = page + 1;
    const resp = await fetchListProducts(nextPage);
    setProducts(prevValue => [...prevValue, ...resp.data]);
    setTotalPages(resp.meta.totalPages);
    setPage(nextPage);
  }, [page]);

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
      hasMore={totalPages > page}
      next={loadMore}
      loader={null}
      >
        <ProductList products={products} />
    </InfiniteScroll>
  </>;
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<IIdexPageProps> = async function() {
  const resp = await fetchListProducts();

  return {
    props: {
      pageTitle: 'Index page',
      startProducts: resp.data,
      startTotalPages: resp.meta.totalPages
    }
  };
}