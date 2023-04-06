import * as React from "react";
import { Row } from "react-bootstrap";
import { BaseReportMobileTable } from "../Table/BaseTableMobile";
import { IPageInfo } from "../Table/CustomPagination";
import { IAllDrawingsListData } from "./AllDrawingsListTable";

interface IAllDrawingsMobileListTableProps {
  records: IAllDrawingsListData[];
  pageInfo: IPageInfo;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  updatePageSize: (value: string) => void;
}

export const AllDrawingsMobileListTable: React.FC<IAllDrawingsMobileListTableProps> = (
  props
) => {
  return (
    <>
      <BaseReportMobileTable
        pageInfo={props.pageInfo}
        pageSize={props.pageSize}
        refetch={props.refetch}
        totalCount={props.totalCount}
        updatePageSize={props.updatePageSize}
      >
        {props.records.map((item, index) => (
          <div className="region-mobile-card mb-2" key={index}>
            <h4 className="mb-2">SiteName</h4>
            <Row className="heading-key">Number</Row>
            <Row className="heading-value">{item.Number}</Row>
            <Row className="heading-key">Sheet No</Row>
            <Row className="heading-value">{item.SheetNo}</Row>
            <Row className="heading-key">Description</Row>
            <Row className="heading-value">{item.Description}</Row>
          </div>
        ))}
      </BaseReportMobileTable>
    </>
  );
};
