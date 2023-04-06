/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ComponentInventoryFilter, ComponentInventorySort } from "./globalTypes";

// ====================================================
// GraphQL query operation: InventoriesListBySiteId
// ====================================================

export interface InventoriesListBySiteId_componentInventoriesReportQuery_nodes {
  __typename: "ComponentInventory";
  siteName: string | null;
  routeName: string | null;
  classDesc: string | null;
  componentTypeDesc: string | null;
  manufactureName: string | null;
  model: string | null;
  partnumber: string | null;
  barcode: string | null;
  loc1: string | null;
  loc2: string | null;
  loc3: string | null;
  loc4: string | null;
  loc5: string | null;
}

export interface InventoriesListBySiteId_componentInventoriesReportQuery_pageInfo {
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

export interface InventoriesListBySiteId_componentInventoriesReportQuery {
  __typename: "ComponentInventoryConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (InventoriesListBySiteId_componentInventoriesReportQuery_nodes | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: InventoriesListBySiteId_componentInventoriesReportQuery_pageInfo;
  totalCount: number;
}

export interface InventoriesListBySiteId {
  /**
   * Get a report on the component inventories
   */
  componentInventoriesReportQuery: InventoriesListBySiteId_componentInventoriesReportQuery | null;
}

export interface InventoriesListBySiteIdVariables {
  after?: string | null;
  before?: string | null;
  first?: any | null;
  last?: any | null;
  where?: ComponentInventoryFilter | null;
  order_by?: ComponentInventorySort | null;
}
