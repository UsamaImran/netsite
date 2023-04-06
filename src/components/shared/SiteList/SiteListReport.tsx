import * as React from "react";
import { Table } from "react-bootstrap";
import { SortableHeader } from "../../shared/Table/SortableHeader";
import { BaseReportTable } from "../../shared/Table/BaseTable";
import { NavLink } from "react-router-dom";
import { ClientSort } from "../../../generated/globalTypes";
import { IPageInfo } from "../../shared/Table/CustomPagination";
import { SortOperationKind } from "../../../generated/globalTypes";
import { checkValuesData } from "../../../utilities/utilities";

export interface ISiteListReport {
  siteName: string;
  city: string;
  state: string;
  LastVisit: string;
  LastRoutineService: string;
  clientSiteId: number;
  clientId: number;
}

export interface ISiteListTableProps {
  records: ISiteListReport[];
  pageInfo: IPageInfo;
  sortOrder: ClientSort | null;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  sort: (field: string, sortOrder: SortOperationKind | null) => void;
  updatePageSize: (value: string) => void;
}

export const SiteListTable: React.FC<ISiteListTableProps> = (props) => {
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
                Site Name
              </SortableHeader>
              <SortableHeader
                field={"city"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                City
              </SortableHeader>
              <SortableHeader
                field={"state"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                State
              </SortableHeader>
              <SortableHeader
                field={"LastVisit"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Last Visit
              </SortableHeader>
              <SortableHeader
                field={"LastRoutineService"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Last Routine Service
              </SortableHeader>
              <SortableHeader
                field={"status"}
                refresh={props.sort}
                currentSort={props.sortOrder}
              >
                Status
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
                        className="nav-item"
                        to={`/regions/${row.clientId}/sites/${row.clientSiteId}`}
                      >
                        {row.siteName}
                      </NavLink>
                    </td>
                    <td className="small">{row.city}</td>
                    <td className="small">{row.state}</td>
                    <td className="small">{row.LastVisit}</td>
                    <td className="small">{row.LastRoutineService}</td>
                    <td className="small"></td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </BaseReportTable>
    </>
  );
};
