/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserFilter } from "./globalTypes";

// ====================================================
// GraphQL query operation: UserDetail
// ====================================================

export interface UserDetail_users_nodes {
  __typename: "User";
  firstName: string | null;
  middleInitial: string | null;
  lastName: string | null;
  password: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  phoneNumber: string | null;
  mobileNumber: string | null;
  eMailAddress: string | null;
}

export interface UserDetail_users {
  __typename: "UserConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (UserDetail_users_nodes | null)[] | null;
}

export interface UserDetail {
  /**
   * User for Reports data
   */
  users: UserDetail_users | null;
}

export interface UserDetailVariables {
  where?: UserFilter | null;
}
