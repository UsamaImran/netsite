import { useQuery } from "@apollo/client";
import * as React from "react";
import { Row } from "react-bootstrap";
import {
  RouteByIdAndSiteId,
  RouteByIdAndSiteId_routesQuery_nodes,
} from "../../../../generated/RouteByIdAndSiteId";
import { isNotNull } from "../../../../utilities/utilities";
import { AlertWrapped } from "../../../shared/Alerts/AlertWrapped";
import { SimpleCard } from "../../../shared/Cards/SimpleCard";
import { ROUTE_BY_ID_AND_SITE_ID_QUERY } from "./query";

interface IRouteInfoMobileProps {
  id: string;
}

export const RouteInfoMobile: React.FC<IRouteInfoMobileProps> = (props) => {
  let { loading, error, data } = useQuery<RouteByIdAndSiteId>(
    ROUTE_BY_ID_AND_SITE_ID_QUERY,
    {
      variables: {
        where: { routeId: +props.id },
      },
    }
  );

  const getRouteInfo = React.useCallback(() => {
    if (data?.routesQuery?.nodes) {
      const routes = isNotNull<RouteByIdAndSiteId_routesQuery_nodes>(
        data.routesQuery.nodes
      );
      if (routes.length > 0) {
        const route = routes[0];
        return (
          <div className="region-mobile-card mb-2">
            <Row className="heading-key">Route Name:</Row>
            <Row className="heading-value">{route.routeName}</Row>
            <Row className="heading-key">Manufacturer:</Row>
            <Row className="heading-value">
              {route.Manufacture?.manufacturerName}
            </Row>
            <Row className="heading-key">Scope Of Work:</Row>
            <Row className="heading-value">{route.scopeOfWork}</Row>
            <Row className="heading-key">Installed by OPS:</Row>
            <Row className="heading-value">
              {route.servicedByOPS ? "Yes" : "No"}
            </Row>
            <Row className="heading-key">System Type:</Row>
            <Row className="heading-value">
              {route.SystemType?.systemTypeDesc}
            </Row>
          </div>
        );
      } else {
        return <p>No Route exists with the given id!</p>;
      }
    }
    return null;
  }, [data]);

  const showError = React.useCallback(() => {
    if (error) {
      return (
        <AlertWrapped
          header={error.name}
          text={error.message}
          bgStyle="danger"
          textColor="white"
        />
      );
    }
    return null;
  }, [error]);

  return (
    <>
      <SimpleCard
        isMobileView={true}
        style={{
          borderBottom: "2px solid black",
        }}
        // bodyStyle={{
        //   paddingLeft: "40px",
        // }}
        loading={loading}
        header="Route Information"
      >
        {getRouteInfo()}
        {showError()}
      </SimpleCard>
    </>
  );
};
