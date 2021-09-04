import { FieldFunctionOptions, FieldPolicy, FieldReadFunction, InMemoryCacheConfig } from "@apollo/client";
import { GetProductsListVariables, GetProductsList_fetchList, GetProductsList_fetchList_meta } from "./queries/product/__generated_types__/GetProductsList";

const config: InMemoryCacheConfig = {
    typePolicies: {
        Query: {
            fields: {
                fetchList: {
                    keyArgs: false
                }
            }
        },

        ResponseFetchList: {
            fields: {
                data: {
                    merge: (existing = [], incoming) => [ ...existing, ...incoming ]
                } as FieldPolicy<GetProductsList_fetchList['data']>,
                meta: {
                    merge: (_, incoming, { variables: { page }, readField }: FieldFunctionOptions<GetProductsListVariables, GetProductsListVariables>) => ({
                        ...incoming,
                        // merge does not work for local fields
                        hasMore: readField('totalPages', incoming) > page
                    })
                } as FieldPolicy<GetProductsList_fetchList_meta>
            }
        },

        ResponseFetchListMeta: {
            fields: {
                totalPages: {
                    read: (existing) => existing || 0
                } as FieldPolicy<GetProductsList_fetchList_meta['totalPages']>
            }
        }
    }
};
export default config;