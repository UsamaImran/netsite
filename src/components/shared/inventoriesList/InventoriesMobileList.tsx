import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { IInventoriesListData } from "./InventoriesListTable";
import { BaseReportMobileTable } from "../Table/BaseTableMobile";
import { IPageInfo } from "../Table/CustomPagination";
import { checkValuesData } from "../../../utilities/utilities";

interface IInventoriesListTableProps {
  records: IInventoriesListData[];
  pageInfo: IPageInfo;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  updatePageSize: (value: string) => void;
}

export const InventoriesMobileTable: React.FC<IInventoriesListTableProps> = (
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
            <Row className="heading-key">Route</Row>
            <Row className="heading-value">{item.routeName}</Row>
            <Row className="heading-key">Class</Row>
            <Row className="heading-value">{item.classDesc}</Row>
            <Row className="heading-key">Type</Row>
            <Row className="heading-value">{item.componentTypeDesc}</Row>
            <Row className="heading-key">Manufacter</Row>
            <Row className="heading-value">{item.manufactureName}</Row>
            <Row className="heading-key">Model</Row>
            <Row className="heading-value">{item.model}</Row>
            <Row className="heading-key">Part Number</Row>
            <Row className="heading-value">{item.partnumber}</Row>
            <Row>
              <Col>
                <Row className="heading-key">Barcode</Row>
                <Row className="heading-value">{item.barcode}</Row>
              </Col>
              <Col>
                <Row className="heading-key"> Location</Row>
                <Row className="heading-value"> {item.loc1}</Row>
              </Col>
            </Row>
          </div>
        ))}
      </BaseReportMobileTable>
    </>
  );
};
