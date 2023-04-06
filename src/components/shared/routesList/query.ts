import { gql } from "@apollo/client";

export const ROUTES_LIST_BY_SITE_ID_QUERY = gql`
    query RoutesListBySiteId($after: String, $before: String, $first: PaginationAmount, $last: PaginationAmount, $where: RouteFilter, $order_by: RouteSort){
        getRoutes(after: $after, before: $before, first: $first, last: $last, where: $where, order_by: $order_by) {
            nodes {
                clientSiteId
                routeId
                routeName
                Manufacture {
                    manufacturerName
                }
                SystemType {
                    systemTypeDesc
                }
                TaskFrequency {
                    taskFrequencyDesc
                }
                servicedByOPS
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