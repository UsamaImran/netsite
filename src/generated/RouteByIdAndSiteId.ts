/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RouteFilter } from "./globalTypes";

// ====================================================
// GraphQL query operation: RouteByIdAndSiteId
// ====================================================

export interface RouteByIdAndSiteId_routesQuery_nodes_SystemType {
  __typename: "SystemType";
  systemTypeDesc: string | null;
}

export interface RouteByIdAndSiteId_routesQuery_nodes_Manufacture {
  __typename: "Manufacturer";
  manufacturerName: string | null;
}

export interface RouteByIdAndSiteId_routesQuery_nodes {
  __typename: "Route";
  routeName: string | null;
  scopeOfWork: string | null;
  SystemType: RouteByIdAndSiteId_routesQuery_nodes_SystemType | null;
  Manufacture: RouteByIdAndSiteId_routesQuery_nodes_Manufacture | null;
  servicedByOPS: number | null;
}

export interface RouteByIdAndSiteId_routesQuery {
  __typename: "RouteConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (RouteByIdAndSiteId_routesQuery_nodes | null)[] | null;
}

export interface RouteByIdAndSiteId {
  /**
   * Get the data form the runs table
   */
  routesQuery: RouteByIdAndSiteId_routesQuery | null;
}

export interface RouteByIdAndSiteIdVariables {
  where?: RouteFilter | null;
}
