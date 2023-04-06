import * as React from "react";
import { Table } from "react-bootstrap";
import {
  ServiceDocumentSort,
  SortOperationKind,
} from "../../../generated/globalTypes";
import { checkValuesData } from "../../../utilities/utilities";
import DocumentDownload, {
  DOCUMENT_DOWNLOAD_TYPE,
} from "../DocumentDownload/DocumentDownload";
import { BaseReportTable } from "../Table/BaseTable";
import { IPageInfo } from "../Table/CustomPagination";
import { SortableHeader } from "../Table/SortableHeader";

export interface IServiceHistoriesListData {
  documentDate: string;
  siteName: string;
  routeName: string;
  jNumber: string;
  scopeOfWork: string;
  Info: string;
  documentId: number;
}

interface IServiceHistoriesListTableProps {
  records: IServiceHistoriesListData[];
  pageInfo: IPageInfo;
  sortOrder: ServiceDocumentSort | null;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  sort: (field: string, sortOrder: SortOperationKind | null) => void;
  updatePageSize: (value: string) => void;
}

export const ServiceHistoriesListTable: React.FC<IServiceHistoriesListTableProps> = (
  props
) => {
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
                field={"jNumber"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Job No
              </SortableHeader>
              <SortableHeader
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Scope Of Work
              </SortableHeader>
              <SortableHeader
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Info
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
                    <td className="small">{row.jNumber}</td>
                    <td className="small">{row.scopeOfWork}</td>
                    <td className="small">{row.Info}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </BaseReportTable>
    </>
  );
};
