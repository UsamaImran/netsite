import * as React from "react";
import { Table } from "react-bootstrap";
import {
  ProposalSort,
  SortOperationKind,
} from "../../../generated/globalTypes";
import { checkValuesData } from "../../../utilities/utilities";
import DocumentDownload, {
  DOCUMENT_DOWNLOAD_TYPE,
} from "../DocumentDownload/DocumentDownload";
import { BaseReportTable } from "../Table/BaseTable";
import { IPageInfo } from "../Table/CustomPagination";
import { SortableHeader } from "../Table/SortableHeader";

export interface IProposalsListData {
  documentDate: string;
  siteName: string;
  routeName: string;
  scopeOfWork: string;
  Price: number;
  PostedBy: string;
  documentId: number;
}

interface IProposalsListTableProps {
  records: IProposalsListData[];
  pageInfo: IPageInfo;
  sortOrder: ProposalSort | null;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  sort: (field: string, sortOrder: SortOperationKind | null) => void;
  updatePageSize: (value: string) => void;
}

export const ProposalsListTable: React.FC<IProposalsListTableProps> = (
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
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Scope Of Work
              </SortableHeader>
              <SortableHeader
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Price
              </SortableHeader>
              <SortableHeader
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Posted By
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
                    <td className="small">{row.scopeOfWork}</td>
                    <td className="small">{row.Price}</td>
                    <td className="small">{row.PostedBy}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </BaseReportTable>
    </>
  );
};
