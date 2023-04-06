import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { CustomMobilePagination, IPageInfo } from "./CustomMobilePagination";
import { RecordsPerPage } from "./RecordsPerPage";

interface IBaseReportTableProps {
  pageInfo: IPageInfo;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  updatePageSize: (value: string) => void;
}

export const BaseReportMobileTable: React.FC<IBaseReportTableProps> = (
  props
) => {
  return (
    <>
      <Col>
        <CustomMobilePagination
          refetch={props.refetch}
          pageInfo={props.pageInfo}
          pageSize={props.pageSize}
          totalCount={props.totalCount}
        />
        <Row className="justify-content-between align-items-center pl-2 pr-2">
          <p className="pagination-total-count">
            Total <strong>{props.totalCount}</strong>
          </p>
          <RecordsPerPage
            isMobile={true}
            handleChange={props.updatePageSize}
            currentSize={props.pageSize}
          />
        </Row>
      </Col>
      {props.children}
    </>
  );
};
