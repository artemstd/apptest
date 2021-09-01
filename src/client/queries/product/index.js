import { gql } from '@apollo/client';

const PRODUCT_ITEM = gql`
    fragment ProductItem on Product {
        id
        image
        name
        shortDescription
        price
    }
`;

export const GET_PRODUCTS_LIST = gql`
    query GetProductsList($page: Int) {
        fetchList(page: $page) {
            data {
                ...ProductItem
            }
            meta {
                totalPages
                hasMore @client
            }
        }
    }
    ${PRODUCT_ITEM}
`;

export const GET_PRODUCT_ONE = gql`
    query GetProductOne($id: Int!) {
        fetchOne(id: $id) {
            data {
                product {
                    ...ProductItem
                    description
                }
                relatedProducts {
                    ...ProductItem
                }
            }
        }
    }
    ${PRODUCT_ITEM}
`;