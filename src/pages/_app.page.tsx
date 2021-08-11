import '../style.css';
import Template from '../components/templates/Default';
import { IAppPageProps, IBasePageProps } from './types';
import { NextPage } from 'next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { useState } from 'react';

const App: NextPage<IAppPageProps<IBasePageProps>> = ({ Component, pageProps }) => {
    const [ queryClient ] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60000,
                notifyOnChangePropsExclusions: ['isFetching', 'isStale']
            }
        }
    }));
    const { pageTitle, queryData } = pageProps;
    return <QueryClientProvider client={queryClient}>
        <Hydrate state={queryData}>
            <Template pageTitle={pageTitle}>
                <Component {...pageProps} />
            </Template>
        </Hydrate>
    </QueryClientProvider>;
};

App.defaultProps = {
    pageProps: {}
};

export default App;