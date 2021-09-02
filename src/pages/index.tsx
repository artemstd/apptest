import { GetServerSideProps, NextPage } from 'next';
import { QueryClient, QueryFunction, useInfiniteQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { IBasePageProps } from './types';
import Heading from '../components/atoms/typography/Heading';
import ProductList from '../components/organisms/product/List';
import { fetchList as fetchListProducts } from '../api/products';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import { useRef } from 'react';

const fetchListProductsQueryFn: QueryFunction<ReturnType<typeof fetchListProducts> extends Promise<infer T> ? T : any> = ({ pageParam = 1 }) => fetchListProducts(pageParam || 1);

const IndexPage: NextPage<IBasePageProps> = () => {
  const loadMoreRef = useRef();

  const { isSuccess, data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery('products', fetchListProductsQueryFn, {
    getNextPageParam: (lastPage, pages) => lastPage.meta.totalPages > pages.length ? pages.length + 1 : undefined
  });

  useIntersectionObserver({
    enabled: !isFetchingNextPage && hasNextPage,
    callback: fetchNextPage,
    target: loadMoreRef
  });

  return <>
    <Heading size={1} className="text-center mt-36 sm:mt-48">Star Wars<br />Figures</Heading>
    <Heading size={3} className="
      text-center
      mt-8 sm:mt-12 mx-auto mb-36 sm:mb-48 xl:mb-36
      w-11/12 sm:w-5/6 md:w-3/4 lg:w-1/2
      ">
      Find the latest products for the biggest fans of the iconic saga.
    </Heading>
    
    { isSuccess &&
      <>
        <ProductList products={ data.pages.map(item => item.data) } />
        <div ref={loadMoreRef} className="text-center">
          { isFetchingNextPage && <span className="mt-6 inline-block">Loading...</span> }
        </div>
      </>
    }
  </>;
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<IBasePageProps> = async function() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery('products', fetchListProductsQueryFn);
  
  return {
    props: {
      pageTitle: 'Index page',
      queryData: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    }
  };
}