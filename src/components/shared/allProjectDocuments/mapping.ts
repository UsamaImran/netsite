import {
  ProjectsByClientQuery_projectsByClientQuery_nodes,
  ProjectsByClientQuery_projectsByClientQuery_pageInfo,
} from "../../../generated/ProjectsByClientQuery";
import {
  StringOrDefault,
  StringToShortDate,
  NumberOrDefault,
} from "../../../utilities/TextExtensions";
import { IPageInfo } from "../Table/CustomPagination";
import { IAllProjectDocumentsListData } from "./AllProjectDocumentsListTable";

export const MapReportRecords = (
  nodes: ProjectsByClientQuery_projectsByClientQuery_nodes[]
) => {
  let records = nodes.map((item) => {
    let newRecord: IAllProjectDocumentsListData = {
      documentId: NumberOrDefault(item.documentId),
      Date: StringToShortDate(item.Date),
      siteName: StringOrDefault(item.siteName),
      routeName: StringOrDefault(item.routeName),
      Description: StringOrDefault(item.Description),
      jNumber: StringOrDefault(item.jNumber),
    };
    return newRecord;
  });
  return records;
};

export const MapPageInfo = (
  data: ProjectsByClientQuery_projectsByClientQuery_pageInfo
) => {
  let pageInfo: IPageInfo = {
    endCursor: data.endCursor,
    hasNextPage: data.hasNextPage,
    hasPreviousPage: data.hasPreviousPage,
    startCursor: data.startCursor,
  };
  return pageInfo;
};
