import { gql } from '@apollo/client';

export default gql`
    extend type ResponseFetchListMeta {
        hasMore: Boolean!
    }
 `;