import { RoutesListBySiteId_getRoutes_nodes, RoutesListBySiteId_getRoutes_pageInfo } from "../../../generated/RoutesListBySiteId";
import { NumberOrDefault, StringOrDefault } from "../../../utilities/TextExtensions";
import { IPageInfo } from "../Table/CustomPagination";
import { IRoutesListData } from "./RoutesListTable";


export const MapReportRecords = (nodes: RoutesListBySiteId_getRoutes_nodes[]) => {
  let records = nodes.map((item) => {
    let newRecord: IRoutesListData = {
      siteId: NumberOrDefault(item.clientSiteId),
      routeId: StringOrDefault(item.routeId),
      routeName: StringOrDefault(item.routeName),
      manufacturerName: StringOrDefault(item.Manufacture?.manufacturerName),
      systemTypeDesc: StringOrDefault(item.SystemType?.systemTypeDesc),
      taskFrequencyDesc: StringOrDefault(item.TaskFrequency?.taskFrequencyDesc),
      servicedByOPS: NumberOrDefault(item.servicedByOPS),
    }
    return newRecord;
  })
  return records;
}

export const MapPageInfo = (data: RoutesListBySiteId_getRoutes_pageInfo) => {
  let pageInfo: IPageInfo = {
    endCursor: data.endCursor,
    hasNextPage: data.hasNextPage,
    hasPreviousPage: data.hasPreviousPage,
    startCursor: data.startCursor
  };
  return pageInfo;
}