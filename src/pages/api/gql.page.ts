import { ApolloServer } from 'apollo-server-micro';
import { typeDefs, resolvers, dataSources } from '../../graphql/schema';
import { PageConfig } from 'next';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => dataSources
});

export const config: PageConfig = {
    api: {
        bodyParser: false
    }
}
  

export default server.createHandler({ path: '/api/gql' });