import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { CustomPagination, IPageInfo } from "./CustomPagination";
import { RecordsPerPage } from "./RecordsPerPage";

interface IBaseReportTableProps {
  pageInfo: IPageInfo;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  updatePageSize: (value: string) => void;
}

export const BaseReportTable: React.FC<IBaseReportTableProps> = (props) => {
  return (
    <>
      <Row>
        <Col>
          <CustomPagination
            refetch={props.refetch}
            pageInfo={props.pageInfo}
            pageSize={props.pageSize}
            totalCount={props.totalCount}
          />
        </Col>
        <Col xs="2">
          <RecordsPerPage
            isMobile={false}
            handleChange={props.updatePageSize}
            currentSize={props.pageSize}
          />
        </Col>
      </Row>
      {props.children}
      <Row>
        <Col>
          <CustomPagination
            refetch={props.refetch}
            pageInfo={props.pageInfo}
            pageSize={props.pageSize}
            totalCount={props.totalCount}
          />
        </Col>
        <Col xs="2"></Col>
      </Row>
    </>
  );
};
