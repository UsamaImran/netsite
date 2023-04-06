import { gql } from "@apollo/client";

export const INVENTORIES_LIST_BY_SITE_ID_QUERY = gql`
    query InventoriesListBySiteId($after: String, $before: String, $first: PaginationAmount, $last: PaginationAmount, $where: ComponentInventoryFilter, $order_by: ComponentInventorySort){
        componentInventoriesReportQuery(after: $after, before: $before, first: $first, last: $last, where: $where, order_by: $order_by) {
            nodes {
                siteName
                routeName
                classDesc
                componentTypeDesc
                manufactureName
                model
                partnumber
                barcode
                loc1
                loc2
                loc3
                loc4
                loc5
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