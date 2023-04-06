import * as React from "react";
import { Table } from "react-bootstrap";
import { InvoiceSort, SortOperationKind } from "../../../generated/globalTypes";
import { BaseReportTable } from "../Table/BaseTable";
import { IPageInfo } from "../Table/CustomPagination";
import { SortableHeader } from "../Table/SortableHeader";

export interface IAllDrawingsListData {
  Description: string;
  Number: string;
  SheetNo: string;
}

interface IAllDrawingsListTableProps {
  records: IAllDrawingsListData[];
  pageInfo: IPageInfo;
  sortOrder: InvoiceSort | null;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  sort: (field: string, sortOrder: SortOperationKind | null) => void;
  updatePageSize: (value: string) => void;
}

export const AllDrawingsListTable: React.FC<IAllDrawingsListTableProps> = (
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
                field={"Description"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Description
              </SortableHeader>
              <SortableHeader
                field={"Number"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Number
              </SortableHeader>
              <SortableHeader
                field={"SheetNo"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                SheetNo
              </SortableHeader>
            </tr>
          </thead>
          <tbody>
            {props.records &&
              props.records.map((row, i) => {
                return (
                  <tr key={"templates" + i}>
                    <td className="small">{row.Description}</td>
                    <td className="small">{row.Number}</td>
                    <td className="small">{row.SheetNo}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </BaseReportTable>
    </>
  );
};
