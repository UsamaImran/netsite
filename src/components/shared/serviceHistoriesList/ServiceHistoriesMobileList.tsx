import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { IServiceHistoriesListData } from "./ServiceHistoriesListTable";
import { BaseReportMobileTable } from "../Table/BaseTableMobile";
import { IPageInfo } from "../Table/CustomPagination";
import DocumentDownload, {
  DOCUMENT_DOWNLOAD_TYPE,
} from "../DocumentDownload/DocumentDownload";
import { checkValuesData } from "../../../utilities/utilities";

interface IServiceHistoriesMobileListTableProps {
  records: IServiceHistoriesListData[];
  pageInfo: IPageInfo;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  updatePageSize: (value: string) => void;
}

export const ServiceHistoriesMobileTable: React.FC<IServiceHistoriesMobileListTableProps> = (
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
        {checkValuesData(props.records).map((item, index) => (
          <div className="region-mobile-card mb-2" key={index}>
            <h4 className="mb-0">{item.siteName}</h4>
            <Row>
              <Col>
                <Row className="heading-key">Date</Row>
                <Row className="heading-value">{item.documentDate}</Row>
              </Col>
              <Col>
                <Row className="heading-key"> Job No</Row>
                <Row className="heading-value">{item.jNumber}</Row>
              </Col>
            </Row>
            <Row className="heading-key">Route Name</Row>
            <Row className="heading-value">{item.routeName}</Row>
            <Row className="heading-key">Scope of Work</Row>
            <Row className="heading-value">{item.scopeOfWork}</Row>
            <Row className="heading-key">Information</Row>
            <Row className="heading-value">{item.Info}</Row>
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
  );
};
