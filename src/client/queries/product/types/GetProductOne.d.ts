/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProductOne
// ====================================================

export interface GetProductOne_fetchOne_data_product {
  __typename: "Product";
  id: number;
  image: string;
  name: string;
  shortDescription: string;
  price: number;
  description: string;
}

export interface GetProductOne_fetchOne_data_relatedProducts {
  __typename: "Product";
  id: number;
  image: string;
  name: string;
  shortDescription: string;
  price: number;
}

export interface GetProductOne_fetchOne_data {
  __typename: "ResponseFetchOneData";
  product: GetProductOne_fetchOne_data_product;
  relatedProducts: GetProductOne_fetchOne_data_relatedProducts[];
}

export interface GetProductOne_fetchOne {
  __typename: "ResponseFetchOne";
  data: GetProductOne_fetchOne_data;
}

export interface GetProductOne {
  fetchOne: GetProductOne_fetchOne;
}

export interface GetProductOneVariables {
  id: number;
}
