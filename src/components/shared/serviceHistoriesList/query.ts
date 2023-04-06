import { gql } from "@apollo/client";

export const SERVICE_HISTORIES_LIST_BY_SITE_ID_QUERY = gql`
    query ServiceHistoriesListBySiteId($after: String, $before: String, $first: PaginationAmount, $last: PaginationAmount, $where: ServiceDocumentFilter, $order_by: ServiceDocumentSort){
        serviceDocumentQuery(after: $after, before: $before, first: $first, last: $last, where: $where, order_by: $order_by) {
            nodes {
              Date
              siteName
              routeName
              JobNumber
              ScopeOfWork
              Info
              documentId
            },
            pageInfo {
                hasNextPage
                hasPreviousPage
                endCursor
                startCursor
            },
            totalCount
        }
    }
`;