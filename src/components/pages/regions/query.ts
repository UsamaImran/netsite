import { gql } from "@apollo/client";

export const CLIENT_REGIONS_QUERY = gql`
    query clientQuery($after:String, $before:String, $first:PaginationAmount, $last:PaginationAmount, $where:ClientFilter, $order_by:ClientSort){
        getClients(after:$after, before: $before, first:$first, last:$last, where:$where, order_by:$order_by){
            nodes{
                clientMasterId
                clientName
                clientNotes
                dateCreated
                jitterbit_UID
                jointCommission
                lastModifiedDate
                lastModifiedUser
                nAPR
                odoo_ref_partner
                organizationId
                orr_Distribution_Emails
                sVMXAccountId
                sVMXParentId
                viewInspectionTime
            }
        }
    }
`;