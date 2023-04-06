/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RouteFilter, RouteSort } from "./globalTypes";

// ====================================================
// GraphQL query operation: RoutesListBySiteId
// ====================================================

export interface RoutesListBySiteId_getRoutes_nodes_Manufacture {
  __typename: "Manufacturer";
  manufacturerName: string | null;
}

export interface RoutesListBySiteId_getRoutes_nodes_SystemType {
  __typename: "SystemType";
  systemTypeDesc: string | null;
}

export interface RoutesListBySiteId_getRoutes_nodes_TaskFrequency {
  __typename: "TaskFrequency";
  taskFrequencyDesc: string | null;
}

export interface RoutesListBySiteId_getRoutes_nodes {
  __typename: "Route";
  clientSiteId: number | null;
  routeId: string;
  routeName: string | null;
  Manufacture: RoutesListBySiteId_getRoutes_nodes_Manufacture | null;
  SystemType: RoutesListBySiteId_getRoutes_nodes_SystemType | null;
  TaskFrequency: RoutesListBySiteId_getRoutes_nodes_TaskFrequency | null;
  servicedByOPS: number | null;
}

export interface RoutesListBySiteId_getRoutes_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;
  /**
   * Indicates whether more edges exist prior the set defined by the clients arguments.
   */
  hasPreviousPage: boolean;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface RoutesListBySiteId_getRoutes {
  __typename: "RouteConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (RoutesListBySiteId_getRoutes_nodes | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: RoutesListBySiteId_getRoutes_pageInfo;
  totalCount: number;
}

export interface RoutesListBySiteId {
  /**
   * User to filter data for reporting 
   */
  getRoutes: RoutesListBySiteId_getRoutes | null;
}

export interface RoutesListBySiteIdVariables {
  after?: string | null;
  before?: string | null;
  first?: any | null;
  last?: any | null;
  where?: RouteFilter | null;
  order_by?: RouteSort | null;
}
