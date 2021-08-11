import { IResolvers } from "graphql-tools";
import { IContext } from "../types";

const resolvers: IResolvers<any, IContext> = {
    Mutation: {
        create: (_, { data }, { dataSources }) => dataSources.preOrder.create(data)
    }
};

export default resolvers;