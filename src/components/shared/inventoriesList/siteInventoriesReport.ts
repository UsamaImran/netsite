import { Report } from "../../types/baseReport";
import { DocumentNode } from "graphql";
import { gql } from "@apollo/client";
import { ComponentInventoryFilter, ComponentInventorySort } from "../../../generated/globalTypes";
import { ISearchByReportListParams } from "../reportPage/ReportListFilter";

export const SITE_INVENTORIES_EXPORT = gql`
    query SiteInventoriesExport($where: ComponentInventoryFilter, $order_by: ComponentInventorySort){
        componentInventoriesReportQuery(where: $where, order_by: $order_by) {
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
            }
        }
    }
`;

export class SiteInventoriesReport<T> extends Report<T>{

    constructor(variables: T) {
        super(SITE_INVENTORIES_EXPORT as DocumentNode, variables);
    }

    public static exportByClientSite = async (filter: ComponentInventoryFilter, search: ISearchByReportListParams, sortOrder: ComponentInventorySort | null) => {
        let newFilter = SiteInventoriesReport.GetClientSiteIdSearchFilter(filter, search);
        let vars = {
            where: newFilter,
            order_by: sortOrder
        }
        return new SiteInventoriesReport(vars).BuildExportQuery();
    }

    public static GetClientSiteIdSearchFilter = (filter: ComponentInventoryFilter, search: ISearchByReportListParams) => {
        let newFilter: ComponentInventoryFilter = {
            ...filter
        }

        if (search.searchContent) {
            newFilter.OR = [{
                barcode_contains: search.searchContent
            }, {
                loc1_contains: search.searchContent
            }]
        }

        return newFilter;
    }
}