import { gql } from "@apollo/client";

export const DRAWINGS_BY_SITE_ID_QUERY = gql`
  query drawingsBySiteIdQuery(
    $after: String
    $before: String
    $first: PaginationAmount
    $last: PaginationAmount
    $where: DrawingFilter
    $order_by: DrawingSort
  ) {
    drawingsQuery(
      after: $after
      before: $before
      first: $first
      last: $last
      where: $where
      order_by: $order_by
    ) {
      nodes {
        Description
        Number
        SheetNo
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
