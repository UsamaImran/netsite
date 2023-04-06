import { gql } from "@apollo/client";

export const INVOICES_LIST_BY_SITE_ID_QUERY = gql`
    query InvoicesListBySiteId($userId: Int!,$after: String, $before: String, $first: PaginationAmount, $last: PaginationAmount, $where: InvoiceFilter, $order_by: InvoiceSort){
        invoicePermissionsQuery(userId: $userId, after: $after, before: $before, first: $first, last: $last, where: $where, order_by: $order_by) {
            nodes {
                Date
                siteName
                routeName
                InvoiceNumber
                Description
                Amont
                JobNumber
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