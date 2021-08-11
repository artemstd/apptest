import { IResolvers } from "graphql-tools";
import { IContext } from "../types";

const resolvers: IResolvers<any, IContext> = {
    Query: {
        fetchList: (_, { page }, { dataSources }) => dataSources.product.fetchList(page),
        fetchOne: (_, { id }, { dataSources }) => dataSources.product.fetchOne(id)
    }
};

export default resolvers;