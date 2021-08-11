export default `
    input DataInput {
        productId: Int!,
        email: String!
    }

    type ResponseCreateData {
        message: String!
    }

    type ResponseCreate {
        data: ResponseCreateData
    }

    extend type Mutation {
        create(data: DataInput!): ResponseCreate!
    }
`;