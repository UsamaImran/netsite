/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { InvoiceFilter, InvoiceSort } from "./globalTypes";

// ====================================================
// GraphQL query operation: InvoicesListBySiteId
// ====================================================

export interface InvoicesListBySiteId_invoicePermissionsQuery_nodes {
  __typename: "Invoice";
  Date: any | null;
  siteName: string | null;
  routeName: string | null;
  InvoiceNumber: string | null;
  Description: string | null;
  Amont: string | null;
  JobNumber: string | null;
  documentId: number;
}

export interface InvoicesListBySiteId_invoicePermissionsQuery_pageInfo {
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

export interface InvoicesListBySiteId_invoicePermissionsQuery {
  __typename: "InvoiceConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (InvoicesListBySiteId_invoicePermissionsQuery_nodes | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: InvoicesListBySiteId_invoicePermissionsQuery_pageInfo;
  totalCount: number;
}

export interface InvoicesListBySiteId {
  /**
   * Get the data form the Invoice table
   */
  invoicePermissionsQuery: InvoicesListBySiteId_invoicePermissionsQuery | null;
}

export interface InvoicesListBySiteIdVariables {
  userId: number;
  after?: string | null;
  before?: string | null;
  first?: any | null;
  last?: any | null;
  where?: InvoiceFilter | null;
  order_by?: InvoiceSort | null;
}
