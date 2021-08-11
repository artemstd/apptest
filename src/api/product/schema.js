export default `
    type Product {
        id: Int!
        image: String
        name: String!
        shortDescription: String
        description: String
        price: Float
    }

    type ResponseFetchListMeta {
        totalPages: Int!
    }

    type ResponseFetchList {
        data: [Product!]!
        meta: ResponseFetchListMeta!
    }

    type ResponseFetchOneData {
        product: Product!,
        relatedProducts: [Product!]
    }

    type ResponseFetchOne {
        data: ResponseFetchOneData!
    }

    extend type Query {
        fetchList(page: Int): ResponseFetchList!
        fetchOne(id: Int): ResponseFetchOne!
    }
`;