import { InvoicesListBySiteId_invoicePermissionsQuery_nodes, InvoicesListBySiteId_invoicePermissionsQuery_pageInfo } from "../../../generated/InvoicesListBySiteId";
import { NumberOrDefault, StringOrDefault, StringToShortDate } from "../../../utilities/TextExtensions";
import { IPageInfo } from "../Table/CustomPagination";
import { IInvoicesListData } from "./InvoicesListTable";


export const MapReportRecords = (nodes: InvoicesListBySiteId_invoicePermissionsQuery_nodes[]) => {
  let records = nodes.map((item) => {
    let newRecord: IInvoicesListData = {
      routeName: StringOrDefault(item.routeName),
      siteName: StringOrDefault(item.siteName),
      Amont: StringOrDefault(item.Amont),
      InvoiceNumber: StringOrDefault(item.InvoiceNumber),
      JobNumber: StringOrDefault(item.JobNumber),
      documentDate: StringToShortDate(item.Date),
      description: StringOrDefault(item.Description),
      documentId: NumberOrDefault(item.documentId)
    }
    return newRecord;
  })
  return records;
}

export const MapPageInfo = (data: InvoicesListBySiteId_invoicePermissionsQuery_pageInfo) => {
  let pageInfo: IPageInfo = {
    endCursor: data.endCursor,
    hasNextPage: data.hasNextPage,
    hasPreviousPage: data.hasPreviousPage,
    startCursor: data.startCursor
  };
  return pageInfo;
}