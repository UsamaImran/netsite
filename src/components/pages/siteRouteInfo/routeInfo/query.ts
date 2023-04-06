import { gql } from "@apollo/client";

export const ROUTE_BY_ID_AND_SITE_ID_QUERY = gql`
    query RouteByIdAndSiteId($where: RouteFilter) {
        routesQuery(where: $where) {
            nodes{
                routeName
                scopeOfWork
                SystemType {
                    systemTypeDesc
                }
                Manufacture {
                    manufacturerName
                }
                servicedByOPS
            }
        }
    }
`;