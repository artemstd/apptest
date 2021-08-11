import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';
import * as preOrders from './pre-order';
import * as products from './product';
import { IContext, IDataSources } from './types';

const baseSchema = `
    type Query {
        _empty: Int
    }

    type Mutation {
        _empty: Int
    }
`;
const typeDefs: string[] = [
    baseSchema,
    preOrders.schema,
    products.schema
];

const baseResolvers = {};
const resolvers: IResolvers<any, IContext> = merge(
    baseResolvers,
    preOrders.resolvers,
    products.resolvers
);

const dataSources: IDataSources = {
    product: new products.dataSource(),
    preOrder: new preOrders.dataSource()
}

export { typeDefs, resolvers, dataSources };