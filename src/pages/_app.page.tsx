import '../style.css';
import Template from '../components/templates/Default';
import { IAppPageProps, IBasePageProps, IInitialBasePageProps } from './types';
import { ApolloClient, ApolloProvider, NormalizedCacheObject} from '@apollo/client';
import { useState } from 'react';
import createApolloClient from '../graphql/client/create';
import { AppContextType, NextComponentType } from 'next/dist/shared/lib/utils';

const App: NextComponentType<AppContextType, IInitialBasePageProps, IAppPageProps<IBasePageProps> & IInitialBasePageProps> = ({ Component, pageProps, host }) => {
    const [ apolloClient ] = useState<ApolloClient<NormalizedCacheObject>>(() => createApolloClient(host));
    const { pageTitle, queryData } = pageProps;
    apolloClient.cache.restore(queryData);
    return <ApolloProvider client={apolloClient}>    
        <Template pageTitle={pageTitle}>
            <Component {...pageProps} />
        </Template>
    </ApolloProvider>;
};

App.defaultProps = {
    pageProps: {}
};

App.getInitialProps = async function({ ctx: { req } }) {
    return {
        host: req.headers.host
    }
}

export default App;