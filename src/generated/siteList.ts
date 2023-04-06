/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ClientSiteUserPermissionFilter, ClientSiteUserPermissionSort } from "./globalTypes";

// ====================================================
// GraphQL query operation: siteList
// ====================================================

export interface siteList_clientSiteByUserPermissionQuery_nodes {
  __typename: "ClientSiteUserPermission";
  siteName: string | null;
  city: string | null;
  state: string | null;
  LastVisit: any | null;
  LastRoutineService: any | null;
  clientSiteId: number;
  clientId: number;
}

export interface siteList_clientSiteByUserPermissionQuery_pageInfo {
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

export interface siteList_clientSiteByUserPermissionQuery {
  __typename: "ClientSiteUserPermissionConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (siteList_clientSiteByUserPermissionQuery_nodes | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: siteList_clientSiteByUserPermissionQuery_pageInfo;
  totalCount: number;
}

export interface siteList {
  /**
   * Get the data form the Client Site by User Permission
   */
  clientSiteByUserPermissionQuery: siteList_clientSiteByUserPermissionQuery | null;
}

export interface siteListVariables {
  after?: string | null;
  before?: string | null;
  first?: any | null;
  last?: any | null;
  where?: ClientSiteUserPermissionFilter | null;
  userId: number;
  order_by?: ClientSiteUserPermissionSort | null;
}
