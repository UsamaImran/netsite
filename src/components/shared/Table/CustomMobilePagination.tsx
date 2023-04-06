import * as React from "react";
import { Button, Row } from "react-bootstrap";

export interface IPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string | null;
  startCursor: string | null;
}

export interface IPaginationRefetchVariables {
  after: String;
  before: String;
}

interface IProps {
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  pageInfo: IPageInfo;
  pageSize: number;
  totalCount: number;
}

export const CustomMobilePagination: React.FC<IProps> = (props) => {
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

  return (
    <>
      {(props.pageInfo.hasNextPage || props.pageInfo.hasPreviousPage) && (
        <>
          <Row>
            <Button
              className="mobile-pagination-btn"
              variant="primary"
              onClick={() => previousPage()}
              disabled={!props.pageInfo.hasPreviousPage}
            >
              Prev
            </Button>
            <Button
              className="mobile-pagination-btn"
              variant="primary"
              onClick={() => nextPage()}
              disabled={!props.pageInfo.hasNextPage}
            >
              Next
            </Button>
          </Row>
        </>
      )}
    </>
  );
};
