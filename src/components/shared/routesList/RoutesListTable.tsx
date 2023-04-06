import * as React from "react";
import { Table } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { RouteSort, SortOperationKind } from "../../../generated/globalTypes";
import { checkValuesData } from "../../../utilities/utilities";
import { BaseReportTable } from "../Table/BaseTable";
import { IPageInfo } from "../Table/CustomPagination";
import { SortableHeader } from "../Table/SortableHeader";

export interface IRoutesListData {
  siteId: number;
  routeId: string;
  routeName: string;
  manufacturerName: string;
  systemTypeDesc: string;
  taskFrequencyDesc: string;
  servicedByOPS: number;
}

interface IRoutesListTableProps {
  records: IRoutesListData[];
  pageInfo: IPageInfo;
  sortOrder: RouteSort | null;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  sort: (field: string, sortOrder: SortOperationKind | null) => void;
  updatePageSize: (value: string) => void;
}

export const RoutesListTable: React.FC<IRoutesListTableProps> = (props) => {
  const {
    location: { pathname },
  } = useHistory();

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
                Manufacturer Name
              </SortableHeader>
              <SortableHeader
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                System Type Description
              </SortableHeader>
              <SortableHeader
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Task Frequency Desc
              </SortableHeader>
              <SortableHeader
                field={"servicedByOPS"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Serviced By OPS
              </SortableHeader>
            </tr>
          </thead>
          <tbody>
            {props.records &&
              checkValuesData(props.records).map((row, i) => {
                return (
                  <tr key={"templates" + i}>
                    <td className="small">
                      <NavLink
                        className='nav-item'
                        to={`${pathname}/${row.routeId}`}>
                        {row.routeName}
                      </NavLink>
                    </td>
                    <td className="small">{row.manufacturerName}</td>
                    <td className="small">{row.systemTypeDesc}</td>
                    <td className="small">{row.taskFrequencyDesc}</td>
                    <td className="small">{row.servicedByOPS}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </BaseReportTable>
    </>
  );
};
