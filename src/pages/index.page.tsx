import { GetServerSideProps, NextPage } from 'next';
import { IBasePageProps } from './types';
import Heading from '../components/atoms/typography/Heading';
import ProductList from '../components/organisms/product/List';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useCallback, useRef, useState } from 'react';
import { GET_PRODUCTS_LIST } from '../client/queries/product';
import { GetProductsList, GetProductsListVariables } from '../client/queries/product/types/GetProductsList';
import { useQuery } from '@apollo/client';
import createApolloClient from '../client/create';

const startPage = 1;

const IndexPage: NextPage<IBasePageProps> = () => {
  const [ page, setPage ] = useState(startPage);
  const [ isLoadingMore, setIsLoaingMore ] = useState(false);
  const { data, fetchMore, loading } = useQuery<GetProductsList, GetProductsListVariables>(GET_PRODUCTS_LIST, {
    variables: {
      page: startPage
    }
  });

  const loadMoreRef = useRef();

  const fetchNextPage = useCallback(async () => {
    const nextPage = page + 1;
    setIsLoaingMore(true);
    await fetchMore({
      variables: {
        page: nextPage
      }
    });
    setIsLoaingMore(false);
    setPage(nextPage);
  }, [page]);

  useIntersectionObserver({
    enabled: !loading && !isLoadingMore && data?.fetchList.meta.hasMore,
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
    
    { data &&
      <>
        <ProductList products={ data.fetchList.data } />
        <div ref={loadMoreRef} className="text-center">
          { isLoadingMore && <span className="mt-6 inline-block">Loading...</span> }
        </div>
      </>
    }
  </>;
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<IBasePageProps> = async function({ req }) {
  const apolloClient = createApolloClient(req.headers.host);
  await apolloClient.query({
    query: GET_PRODUCTS_LIST,
    variables: {
      page: startPage
    }
  });

  return {
    props: {
      pageTitle: 'Index page',
      queryData: apolloClient.extract()
    }
  };
}