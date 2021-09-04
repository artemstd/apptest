import { gql } from "@apollo/client";

export const CREATE_PRE_ORDER = gql`
    mutation CreatePreOrder($data: DataInput!) {
        create(data: $data) {
            data {
                message
            }
        }
    }
`;