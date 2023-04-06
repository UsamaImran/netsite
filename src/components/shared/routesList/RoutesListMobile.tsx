import * as React from "react";
import { useHistory } from "react-router-dom";
import { Row } from "react-bootstrap";
import { BaseReportMobileTable } from "../Table/BaseTableMobile";
import { IPageInfo } from "../Table/CustomPagination";
import { IRoutesListData } from "./RoutesListTable";
import { checkValuesData } from "../../../utilities/utilities";

interface IRoutesListTableProps {
  records: IRoutesListData[];
  pageInfo: IPageInfo;
  pageSize: number;
  totalCount: number;
  refetch: (variables?: Partial<Record<string, any>> | undefined) => void;
  updatePageSize: (value: string) => void;
}

export const RoutesListMobile: React.FC<IRoutesListTableProps> = (props) => {
  const history = useHistory();

  const navigateToRouteInfo = (event: React.MouseEvent, routeId: string) => {
    event.preventDefault();
    history.push(`${history.location.pathname}/${routeId}`);
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
          <div
            className="region-mobile-card mb-2"
            key={index}
            onClick={(event: React.MouseEvent) =>
              navigateToRouteInfo(event, item.routeId)
            }
          >
            <h4>{item.routeName}</h4>
            <Row className="heading-key">System Type</Row>
            <Row className="heading-value">{item.systemTypeDesc}</Row>
            <Row className="heading-key"> Manufacturer</Row>
            <Row className="heading-value">{item.manufacturerName}</Row>
            <Row className="heading-key">Serviced By OPS</Row>
            <Row className="heading-value">
              {item.servicedByOPS ? "Yes" : "No"}
            </Row>
            <Row className="heading-key">Task Frequency Desc</Row>
            <Row className="heading-value">{item.taskFrequencyDesc}</Row>
          </div>
        ))}
      </BaseReportMobileTable>
    </>
  );
};
