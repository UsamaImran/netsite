import { gql } from "@apollo/client";

export const SITE_LIST_QUERY = gql`
  query siteList(
    $after: String
    $before: String
    $first: PaginationAmount
    $last: PaginationAmount
    $where: ClientSiteUserPermissionFilter
    $userId: Int!
    $order_by: ClientSiteUserPermissionSort
  ) {
    clientSiteByUserPermissionQuery(
      after: $after
      before: $before
      first: $first
      last: $last
      where: $where
      userId: $userId
      order_by: $order_by
    ) {
      nodes {
        siteName
        city
        state
        LastVisit
        LastRoutineService
        clientSiteId
        clientId
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
