import * as React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { BaseReportMobileTable } from "../Table/BaseTableMobile";
import { IPageInfo } from "../../shared/Table/CustomPagination";
import { checkValuesData } from "../../../utilities/utilities";

export interface ISiteListReport {
  siteName: string;
  city: string;
  state: string;
  LastVisit: string;
  LastRoutineService: string;
  clientSiteId: number;
}

export interface ISiteMobileListTableProps {
  records: ISiteListReport[];
  pageInfo: IPageInfo;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  updatePageSize: (value: string) => void;
}

export const SiteListMobileTable: React.FC<ISiteMobileListTableProps> = (
  props
) => {
  const history = useHistory();

  const navigateToSitePage = (event: React.MouseEvent, siteId: number) => {
    event.preventDefault();
    history.push(`${history.location.pathname}/site/${siteId}`);
  };

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
          <div className="region-mobile-card mb-3" key={index}>
            <h4 className="mb-0">{item.siteName}</h4>
            <Row className="heading-key">City</Row>
            <Row className="heading-value">{item.city}</Row>
            <Row className="heading-key">State</Row>
            <Row className="heading-value">{item.state}</Row>
            <Row>
              <Col>
                <Row className="heading-key">Last Visit</Row>
                <Row className="heading-value">{item.LastVisit}</Row>
              </Col>
              <Col>
                <Row className="heading-key">Last Routine Service</Row>
                <Row className="heading-value">{item.LastRoutineService}</Row>
              </Col>
            </Row>
            <Row className="heading-key">Status</Row>
            <Row className="heading-value"></Row>
            <Row className="d-flex justify-content-center">
              <Button
                onClick={(event: React.MouseEvent) =>
                  navigateToSitePage(event, item.clientSiteId)
                }
                size="lg"
              >
                View site
              </Button>
            </Row>
          </div>
        ))}
      </BaseReportMobileTable>
    </>
  );
};
