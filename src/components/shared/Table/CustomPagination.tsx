import * as React from "react";
import { Col, Pagination, Row } from "react-bootstrap";

export interface IPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string | null;
  startCursor: string | null;
}

export interface IPaginationRefetchVariables {
  after: String;
  before: String;
  first: any;
  last: any;
}

interface IProps {
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  pageInfo: IPageInfo;
  pageSize: number;
  totalCount: number;
}
export const CustomPagination: React.FC<IProps> = (props) => {
  const lastPageRecords = props.totalCount % props.pageSize;

  const nextPage = () => {
    props.refetch &&
      props.refetch({
        after: props.pageInfo.endCursor,
        first: props.pageSize,
        last: null,
        before: null,
      });
  };
  const previousPage = () => {
    props.refetch &&
      props.refetch({
        last: props.pageSize,
        before: props.pageInfo.startCursor,
        after: null,
        first: null,
      });
  };
  const firstPage = () => {
    props.refetch &&
      props.refetch({
        first: props.pageSize,
        before: null,
        after: null,
        last: null,
      });
  };
  const lastPage = () => {
    props.refetch &&
      props.refetch({
        last: lastPageRecords,
        first: null,
        before: null,
        after: null,
      });
  };

  return (
    <>
      {(props.pageInfo.hasNextPage || props.pageInfo.hasPreviousPage) && (
        <>
          <Row xs="6">
            <Col>
              <p className="pagination-total-count">
                Total Count:<strong>{props.totalCount}</strong>
              </p>
            </Col>
            <Col>
              <Pagination>
                <Pagination.First
                  onClick={() => firstPage()}
                  disabled={!props.pageInfo.hasPreviousPage}
                />
                <Pagination.Prev
                  onClick={() => previousPage()}
                  disabled={!props.pageInfo.hasPreviousPage}
                />
                <Pagination.Next
                  onClick={() => nextPage()}
                  disabled={!props.pageInfo.hasNextPage}
                />
                <Pagination.Last
                  onClick={() => lastPage()}
                  disabled={!props.pageInfo.hasNextPage}
                />
              </Pagination>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
