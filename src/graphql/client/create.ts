import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { InMemoryCache } from '@apollo/client';
import isNode from "../../utils/isNode";
import cacheConfig from './cache-config';
import typeDefs from './schema-local';

const createApolloClient = (host: string): ApolloClient<NormalizedCacheObject> => (
    new ApolloClient<NormalizedCacheObject>({
        uri: `http://${host}/api/gql`,
        cache: new InMemoryCache(cacheConfig),
        ssrMode: isNode(),
        typeDefs
    })
);
export default createApolloClient;