import { IPageInfo } from "../../shared/Table/CustomPagination";
import {
  StringOrDefault,
  NumberOrDefault,
  StringToShortDate,
} from "../../../utilities/TextExtensions";
import {
  siteList_clientSiteByUserPermissionQuery_nodes,
  siteList_clientSiteByUserPermissionQuery_pageInfo,
} from "../../../generated/siteList";
import { ISiteListReport } from "./SiteListReport";

export const MapReportRecords = (
  nodes: siteList_clientSiteByUserPermissionQuery_nodes[]
) => {
  let records = nodes.map((item) => {
    let newRecord: ISiteListReport = {
      siteName: StringOrDefault(item.siteName),
      city: StringOrDefault(item.city),
      state: StringOrDefault(item.state),
      clientSiteId: NumberOrDefault(item.clientSiteId),
      LastVisit: StringToShortDate(item.LastVisit),
      LastRoutineService: StringToShortDate(item.LastRoutineService),
      clientId: NumberOrDefault(item.clientId),
    };
    return newRecord;
  });
  return records;
};

export const MapPageInfo = (
  data: siteList_clientSiteByUserPermissionQuery_pageInfo
) => {
  let pageInfo: IPageInfo = {
    endCursor: data.endCursor,
    hasNextPage: data.hasNextPage,
    hasPreviousPage: data.hasPreviousPage,
    startCursor: data.startCursor,
  };
  return pageInfo;
};
