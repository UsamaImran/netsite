import { InventoriesListBySiteId_componentInventoriesReportQuery_nodes, InventoriesListBySiteId_componentInventoriesReportQuery_pageInfo } from "../../../generated/InventoriesListBySiteId";
import { StringOrDefault } from "../../../utilities/TextExtensions";
import { IPageInfo } from "../Table/CustomPagination";
import { IInventoriesListData } from "./InventoriesListTable";


export const MapReportRecords = (nodes: InventoriesListBySiteId_componentInventoriesReportQuery_nodes[]) => {
  let records = nodes.map((item) => {
    let newRecord: IInventoriesListData = {
      classDesc: StringOrDefault(item.classDesc),
      routeName: StringOrDefault(item.routeName),
      siteName: StringOrDefault(item.siteName),
      componentTypeDesc: StringOrDefault(item.componentTypeDesc),
      manufactureName: StringOrDefault(item.manufactureName),
      model: StringOrDefault(item.model),
      partnumber: StringOrDefault(item.partnumber),
      barcode: StringOrDefault(item.barcode),
      loc1: StringOrDefault(item.loc1),
    }
    return newRecord;
  })
  return records;
}

export const MapPageInfo = (data: InventoriesListBySiteId_componentInventoriesReportQuery_pageInfo) => {
  let pageInfo: IPageInfo = {
    endCursor: data.endCursor,
    hasNextPage: data.hasNextPage,
    hasPreviousPage: data.hasPreviousPage,
    startCursor: data.startCursor
  };
  return pageInfo;
}