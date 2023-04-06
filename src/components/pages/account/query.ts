import { gql } from "@apollo/client";

export const USER_DETAIL_QUERY = gql`
  query UserDetail($where: UserFilter) {
    users(where: $where) {
      nodes {
        firstName
        middleInitial
        lastName
        password
        addressLine1
        addressLine2
        city
        state
        zip
        phoneNumber
        mobileNumber
        eMailAddress
      }
    }
  }
`;

export const USER_DETAIL_MUTATION = gql`
  mutation UserDetailMutation($user: UserInput) {
    upsertUsers(u: $user) {
      firstName
      middleInitial
      lastName
      password
      addressLine1
      addressLine2
      city
      state
      zip
      phoneNumber
      mobileNumber
      eMailAddress
    }
  }
`;
