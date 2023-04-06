import {
  drawingsBySiteIdQuery_drawingsQuery_nodes,
  drawingsBySiteIdQuery_drawingsQuery_pageInfo,
} from "../../../generated/drawingsBySiteIdQuery";
import { StringOrDefault } from "../../../utilities/TextExtensions";
import { IPageInfo } from "../Table/CustomPagination";
import { IAllDrawingsListData } from "./AllDrawingsListTable";

export const MapReportRecords = (
  nodes: drawingsBySiteIdQuery_drawingsQuery_nodes[]
) => {
  let records = nodes.map((item) => {
    let newRecord: IAllDrawingsListData = {
      Description: StringOrDefault(item.Description),
      Number: StringOrDefault(item.Number),
      SheetNo: StringOrDefault(item.SheetNo),
    };
    return newRecord;
  });
  return records;
};

export const MapPageInfo = (
  data: drawingsBySiteIdQuery_drawingsQuery_pageInfo
) => {
  let pageInfo: IPageInfo = {
    endCursor: data.endCursor,
    hasNextPage: data.hasNextPage,
    hasPreviousPage: data.hasPreviousPage,
    startCursor: data.startCursor,
  };
  return pageInfo;
};
