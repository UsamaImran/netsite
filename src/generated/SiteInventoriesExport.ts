/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ComponentInventoryFilter, ComponentInventorySort } from "./globalTypes";

// ====================================================
// GraphQL query operation: SiteInventoriesExport
// ====================================================

export interface SiteInventoriesExport_componentInventoriesReportQuery_nodes {
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

export interface SiteInventoriesExport_componentInventoriesReportQuery {
  __typename: "ComponentInventoryConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (SiteInventoriesExport_componentInventoriesReportQuery_nodes | null)[] | null;
}

export interface SiteInventoriesExport {
  /**
   * Get a report on the component inventories
   */
  componentInventoriesReportQuery: SiteInventoriesExport_componentInventoriesReportQuery | null;
}

export interface SiteInventoriesExportVariables {
  where?: ComponentInventoryFilter | null;
  order_by?: ComponentInventorySort | null;
}
