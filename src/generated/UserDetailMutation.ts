/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UserDetailMutation
// ====================================================

export interface UserDetailMutation_upsertUsers {
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

export interface UserDetailMutation {
  upsertUsers: UserDetailMutation_upsertUsers | null;
}

export interface UserDetailMutationVariables {
  user?: UserInput | null;
}
