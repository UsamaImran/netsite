import * as React from "react";
import { Table } from "react-bootstrap";
import { ProjectSort, SortOperationKind } from "../../../generated/globalTypes";
import { checkValuesData } from "../../../utilities/utilities";
import DocumentDownload, {
  DOCUMENT_DOWNLOAD_TYPE,
} from "../DocumentDownload/DocumentDownload";
import { BaseReportTable } from "../Table/BaseTable";
import { IPageInfo } from "../Table/CustomPagination";
import { SortableHeader } from "../Table/SortableHeader";

export interface IAllProjectDocumentsListData {
  documentId: number;
  Date: string;
  siteName: string;
  routeName: string;
  Description: string;
  jNumber: string;
}

interface IAllProjectDocumetsListTableProps {
  records: IAllProjectDocumentsListData[];
  pageInfo: IPageInfo;
  sortOrder: ProjectSort | null;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  sort: (field: string, sortOrder: SortOperationKind | null) => void;
  updatePageSize: (value: string) => void;
}

export const AllProjectDocumetsListTable: React.FC<IAllProjectDocumetsListTableProps> = (
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
                field={"Date"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Date
              </SortableHeader>
              <SortableHeader
                field={"Site Name"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Site Name
              </SortableHeader>
              <SortableHeader
                field={"Route Name"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Route Name
              </SortableHeader>
              <SortableHeader
                field={"Description"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Description
              </SortableHeader>
              <SortableHeader
                field={"Description"}
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
                    <td className="small">{row.Date}</td>
                    <td className="small">{row.siteName}</td>
                    <td className="small">{row.routeName}</td>
                    <td className="small">{row.Description}</td>
                    <td className="small">{row.jNumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </BaseReportTable>
    </>
  );
};
