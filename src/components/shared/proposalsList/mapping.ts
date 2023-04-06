import { ProposalsListBySiteId_proposalByClientQuery_nodes, ProposalsListBySiteId_proposalByClientQuery_pageInfo } from "../../../generated/ProposalsListBySiteId";
import { NumberOrDefault, StringOrDefault, StringToShortDate } from "../../../utilities/TextExtensions";
import { IPageInfo } from "../Table/CustomPagination";
import { IProposalsListData } from "./ProposalsListTable";


export const MapReportRecords = (nodes: ProposalsListBySiteId_proposalByClientQuery_nodes[]) => {
  let records = nodes.map((item) => {
    let newRecord: IProposalsListData = {
      routeName: StringOrDefault(item.routeName),
      siteName: StringOrDefault(item.siteName),
      documentDate: StringToShortDate(item.Date),
      scopeOfWork: StringOrDefault(item.ScopeOfWork),
      PostedBy: StringOrDefault(item.PostedBy),
      Price: NumberOrDefault(item.Price),
      documentId: NumberOrDefault(item.documentId),
    }
    return newRecord;
  })
  return records;
}

export const MapPageInfo = (data: ProposalsListBySiteId_proposalByClientQuery_pageInfo) => {
  let pageInfo: IPageInfo = {
    endCursor: data.endCursor,
    hasNextPage: data.hasNextPage,
    hasPreviousPage: data.hasPreviousPage,
    startCursor: data.startCursor
  };
  return pageInfo;
}