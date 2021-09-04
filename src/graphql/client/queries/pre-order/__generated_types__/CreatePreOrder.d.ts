/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DataInput } from "./../../__generated_types__/global";

// ====================================================
// GraphQL mutation operation: CreatePreOrder
// ====================================================

export interface CreatePreOrder_create_data {
  __typename: "ResponseCreateData";
  message: string;
}

export interface CreatePreOrder_create {
  __typename: "ResponseCreate";
  data: CreatePreOrder_create_data | null;
}

export interface CreatePreOrder {
  create: CreatePreOrder_create;
}

export interface CreatePreOrderVariables {
  data: DataInput;
}
