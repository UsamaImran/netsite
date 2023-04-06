import * as React from "react";
import { Row } from "react-bootstrap";
import { IProposalsListData } from "./ProposalsListTable";
import { BaseReportMobileTable } from "../Table/BaseTableMobile";
import { IPageInfo } from "../Table/CustomPagination";
import DocumentDownload, {
  DOCUMENT_DOWNLOAD_TYPE,
} from "../DocumentDownload/DocumentDownload";
import { checkValuesData } from "../../../utilities/utilities";

interface IProposalsListTableProps {
  records: IProposalsListData[];
  pageInfo: IPageInfo;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  updatePageSize: (value: string) => void;
}

export const ProposalsMobileTable: React.FC<IProposalsListTableProps> = (
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
            <h4 className="mb-2">{item.siteName}</h4>
            <Row className="heading-key">Date</Row>
            <Row className="heading-value">{item.documentDate}</Row>
            <Row className="heading-key">Price</Row>
            <Row className="heading-value">{item.Price}</Row>
            <Row className="heading-key">Route Name</Row>
            <Row className="heading-value">{item.routeName}</Row>
            <Row className="heading-key">Scope of Work</Row>
            <Row className="heading-value">{item.scopeOfWork}</Row>
            <Row className="heading-key">Posted By</Row>
            <Row className="heading-value">{item.PostedBy}</Row>
            <Row className="heading-key">Part Number</Row>
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
