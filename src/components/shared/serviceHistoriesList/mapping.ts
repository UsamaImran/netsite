import { ServiceHistoriesListBySiteId_serviceDocumentQuery_nodes, ServiceHistoriesListBySiteId_serviceDocumentQuery_pageInfo } from "../../../generated/ServiceHistoriesListBySiteId";
import { NumberOrDefault, StringOrDefault, StringToShortDate } from "../../../utilities/TextExtensions";
import { IPageInfo } from "../Table/CustomPagination";
import { IServiceHistoriesListData } from "./ServiceHistoriesListTable";


export const MapReportRecords = (nodes: ServiceHistoriesListBySiteId_serviceDocumentQuery_nodes[]) => {
  let records = nodes.map((item) => {
    let newRecord: IServiceHistoriesListData = {
      routeName: StringOrDefault(item.routeName),
      siteName: StringOrDefault(item.siteName),
      jNumber: StringOrDefault(item.JobNumber),
      documentDate: StringToShortDate(item.Date),
      Info: StringOrDefault(item.Info),
      scopeOfWork: StringOrDefault(item.ScopeOfWork),
      documentId: NumberOrDefault(item.documentId)
    }
    return newRecord;
  })
  return records;
}

export const MapPageInfo = (data: ServiceHistoriesListBySiteId_serviceDocumentQuery_pageInfo) => {
  let pageInfo: IPageInfo = {
    endCursor: data.endCursor,
    hasNextPage: data.hasNextPage,
    hasPreviousPage: data.hasPreviousPage,
    startCursor: data.startCursor
  };
  return pageInfo;
}