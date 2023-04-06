import * as React from "react";
import { Table } from "react-bootstrap";
import { InvoiceSort, SortOperationKind } from "../../../generated/globalTypes";
import { checkValuesData } from "../../../utilities/utilities";
import DocumentDownload, {
  DOCUMENT_DOWNLOAD_TYPE,
} from "../DocumentDownload/DocumentDownload";
import { BaseReportTable } from "../Table/BaseTable";
import { IPageInfo } from "../Table/CustomPagination";
import { SortableHeader } from "../Table/SortableHeader";

export interface IInvoicesListData {
  documentDate: string;
  siteName: string;
  routeName: string;
  InvoiceNumber: string;
  Amont: string;
  JobNumber: string;
  description: string;
  documentId: number;
}

interface IInvoicesListTableProps {
  records: IInvoicesListData[];
  pageInfo: IPageInfo;
  sortOrder: InvoiceSort | null;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  sort: (field: string, sortOrder: SortOperationKind | null) => void;
  updatePageSize: (value: string) => void;
}

export const InvoicesListTable: React.FC<IInvoicesListTableProps> = (props) => {
  return (
    <>
      <BaseReportTable
        pageInfo={props.pageInfo}
        pageSize={props.pageSize}
        refetch={props.refetch}
        totalCount={props.totalCount}
        updatePageSize={props.updatePageSize}
      >
        <Table striped hover className="mb-3">
          <thead>
            <tr>
              <SortableHeader
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                DocLink
              </SortableHeader>
              <SortableHeader
                field={"documentDate"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Date
              </SortableHeader>
              <SortableHeader
                field={"siteName"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Site Name
              </SortableHeader>
              <SortableHeader
                field={"routeName"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Route Name
              </SortableHeader>
              <SortableHeader
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Invoice No.
              </SortableHeader>
              <SortableHeader
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Description
              </SortableHeader>
              <SortableHeader
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Amount
              </SortableHeader>
              <SortableHeader
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Job Number
              </SortableHeader>
            </tr>
          </thead>
          <tbody>
            {props.records &&
              checkValuesData(props.records).map((row, i) => {
                return (
                  <tr key={"templates" + i}>
                    <td className="small">
                      <DocumentDownload
                        type={DOCUMENT_DOWNLOAD_TYPE.Button}
                        documentId={row.documentId}
                        text={"View"}
                      ></DocumentDownload>
                    </td>
                    <td className="small">{row.documentDate}</td>
                    <td className="small">{row.siteName}</td>
                    <td className="small">{row.routeName}</td>
                    <td className="small">{row.InvoiceNumber}</td>
                    <td className="small">{row.description}</td>
                    <td className="small">{row.Amont}</td>
                    <td className="small">{row.JobNumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </BaseReportTable>
    </>
  );
};
