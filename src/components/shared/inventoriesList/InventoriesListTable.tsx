import * as React from "react";
import { Table } from "react-bootstrap";
import { InvoiceSort, SortOperationKind } from "../../../generated/globalTypes";
import { checkValuesData } from "../../../utilities/utilities";
import { BaseReportTable } from "../Table/BaseTable";
import { IPageInfo } from "../Table/CustomPagination";
import { SortableHeader } from "../Table/SortableHeader";

export interface IInventoriesListData {
  classDesc: string;
  componentTypeDesc: string;
  siteName: string;
  routeName: string;
  manufactureName: string;
  model: string;
  partnumber: string;
  barcode: string;
  loc1: string;
}

interface IInventoriesListTableProps {
  records: IInventoriesListData[];
  pageInfo: IPageInfo;
  sortOrder: InvoiceSort | null;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  sort: (field: string, sortOrder: SortOperationKind | null) => void;
  updatePageSize: (value: string) => void;
}

export const InventoriesListTable: React.FC<IInventoriesListTableProps> = (
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
                field={"siteName"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Site
              </SortableHeader>
              <SortableHeader
                field={"routeName"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Route
              </SortableHeader>
              <SortableHeader
                field={"classDesc"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Class
              </SortableHeader>
              <SortableHeader
                field={"componentTypeDesc"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Type
              </SortableHeader>
              <SortableHeader
                field={"manufactureName"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Manf
              </SortableHeader>
              <SortableHeader
                field={"model"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Model
              </SortableHeader>
              <SortableHeader
                field={"partnumber"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Part Number
              </SortableHeader>
              <SortableHeader
                field={"barcode"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Barcode
              </SortableHeader>
              <SortableHeader
                field={"loc1"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Location
              </SortableHeader>
            </tr>
          </thead>
          <tbody>
            {props.records &&
              checkValuesData(props.records).map((row, i) => {
                return (
                  <tr key={"templates" + i}>
                    <td className="small">{row.siteName}</td>
                    <td className="small">{row.routeName}</td>
                    <td className="small">{row.classDesc}</td>
                    <td className="small">{row.componentTypeDesc}</td>
                    <td className="small">{row.manufactureName}</td>
                    <td className="small">{row.model}</td>
                    <td className="small">{row.partnumber}</td>
                    <td className="small">{row.barcode}</td>
                    <td className="small">{row.loc1}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </BaseReportTable>
    </>
  );
};
