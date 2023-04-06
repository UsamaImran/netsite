import { gql } from "@apollo/client";

export const PROJECT_BY_CLIENT_QUERY = gql`
  query ProjectsByClientQuery(
    $after: String
    $before: String
    $first: PaginationAmount
    $last: PaginationAmount
    $where: ProjectFilter
    $order_by: ProjectSort
  ) {
    projectsByClientQuery(
      after: $after
      before: $before
      first: $first
      last: $last
      where: $where
      order_by: $order_by
    ) {
      nodes {
        Date
        documentId
        siteName
        routeName
        Description
        jNumber
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      totalCount
    }
  }
`;
