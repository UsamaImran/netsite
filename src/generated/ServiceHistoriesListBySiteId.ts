/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ServiceDocumentFilter, ServiceDocumentSort } from "./globalTypes";

// ====================================================
// GraphQL query operation: ServiceHistoriesListBySiteId
// ====================================================

export interface ServiceHistoriesListBySiteId_serviceDocumentQuery_nodes {
  __typename: "ServiceDocument";
  Date: any | null;
  siteName: string | null;
  routeName: string | null;
  JobNumber: string | null;
  ScopeOfWork: string | null;
  Info: string | null;
  documentId: number;
}

export interface ServiceHistoriesListBySiteId_serviceDocumentQuery_pageInfo {
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

export interface ServiceHistoriesListBySiteId_serviceDocumentQuery {
  __typename: "ServiceDocumentConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (ServiceHistoriesListBySiteId_serviceDocumentQuery_nodes | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: ServiceHistoriesListBySiteId_serviceDocumentQuery_pageInfo;
  totalCount: number;
}

export interface ServiceHistoriesListBySiteId {
  /**
   * Get the data form the Service Document table
   */
  serviceDocumentQuery: ServiceHistoriesListBySiteId_serviceDocumentQuery | null;
}

export interface ServiceHistoriesListBySiteIdVariables {
  after?: string | null;
  before?: string | null;
  first?: any | null;
  last?: any | null;
  where?: ServiceDocumentFilter | null;
  order_by?: ServiceDocumentSort | null;
}
