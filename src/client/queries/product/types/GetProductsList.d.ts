/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProductsList
// ====================================================

export interface GetProductsList_fetchList_data {
  __typename: "Product";
  id: number;
  image: string;
  name: string;
  shortDescription: string;
  price: number;
}

export interface GetProductsList_fetchList_meta {
  __typename: "ResponseFetchListMeta";
  totalPages: number;
  hasMore: boolean;
}

export interface GetProductsList_fetchList {
  __typename: "ResponseFetchList";
  data: GetProductsList_fetchList_data[];
  meta: GetProductsList_fetchList_meta;
}

export interface GetProductsList {
  fetchList: GetProductsList_fetchList;
}

export interface GetProductsListVariables {
  page?: number | null;
}
