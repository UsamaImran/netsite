import { gql } from "@apollo/client";

export const SITE_BY_ID_QUERY = gql`
    query ClientSitesById($where: ClientSiteFilter){
        getClientSites(where: $where) {
            nodes {
                addressLine1
                addressLine2
                city
                siteId
                siteName
                state
                zip
            }
        }
    }
`;