import { ApolloClient } from "@apollo/client";
import cache from './cache';
import typeDefs from './schema-local';

export default function createApolloClient(host: string) {
    return new ApolloClient({
        uri: `http://${host}/api/gql`,
        cache,
        ssrMode: true,
        typeDefs
    })
}