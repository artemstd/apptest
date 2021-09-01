import { InMemoryCache } from '@apollo/client';

export default new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                fetchList: {
                    keyArgs: false,
                    read(existing, { args }) {
                        return {
                            ...existing,
                            meta: {
                                ...existing?.meta,
                                hasMore: (existing?.meta?.totalPages || 1) > (args.page || 1)
                            }
                        }
                    },
                }
            }
        }
    }
});