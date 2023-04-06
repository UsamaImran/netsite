import { gql } from "@apollo/client";

export const PROPOSALS_LIST_BY_SITE_ID_QUERY = gql`
    query ProposalsListBySiteId($after: String, $before: String, $first: PaginationAmount, $last: PaginationAmount, $where: ProposalFilter, $order_by: ProposalSort){
        proposalByClientQuery(after: $after, before: $before, first: $first, last: $last, where: $where, order_by: $order_by) {
            nodes {
              clientId
              clientSiteId
              Date
              siteName
              routeName
              ScopeOfWork
              Price
              PostedBy
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