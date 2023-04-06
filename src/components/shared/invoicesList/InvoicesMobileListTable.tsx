import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { checkValuesData } from "../../../utilities/utilities";
import DocumentDownload, {
  DOCUMENT_DOWNLOAD_TYPE,
} from "../DocumentDownload/DocumentDownload";
import { BaseReportMobileTable } from "../Table/BaseTableMobile";
import { IPageInfo } from "../Table/CustomPagination";
import { IInvoicesListData } from "./InvoicesListTable";

interface IInvoicesListTableProps {
  records: IInvoicesListData[];
  pageInfo: IPageInfo;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  updatePageSize: (value: string) => void;
}

export const InvoicesMobileListTable: React.FC<IInvoicesListTableProps> = (
  props
) => {
  return (
    <>
      <>
        <BaseReportMobileTable
          pageInfo={props.pageInfo}
          pageSize={props.pageSize}
          refetch={props.refetch}
          totalCount={props.totalCount}
          updatePageSize={props.updatePageSize}
        >
          {checkValuesData(props.records).map((item, index) => (
            <div className="region-mobile-card mb-2" key={index}>
              <h4 className="mb-2">{item.siteName}</h4>
              <Row className="heading-key">Route Name</Row>
              <Row className="heading-value">{item.routeName}</Row>
              <Row>
                <Col>
                  <Row className="heading-key">Amount</Row>
                  <Row className="heading-value">{item.Amont}</Row>
                </Col>
                <Col>
                  <Row className="heading-key"> Date</Row>
                  <Row className="heading-value"> {item.documentDate}</Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row className="heading-key">Invoice Number</Row>
                  <Row className="heading-value">{item.InvoiceNumber}</Row>
                </Col>
                <Col>
                  <Row className="heading-key">Job Number</Row>
                  <Row className="heading-value"> {item.JobNumber}</Row>
                </Col>
              </Row>
              <Row className="heading-key">Description</Row>
              <Row className="heading-value">{item.description}</Row>
              <Row className="d-flex justify-content-center">
                <DocumentDownload
                  type={DOCUMENT_DOWNLOAD_TYPE.Button}
                  documentId={item.documentId}
                  text={"View Document"}
                ></DocumentDownload>
              </Row>
            </div>
          ))}
        </BaseReportMobileTable>
      </>
    </>
  );
};
