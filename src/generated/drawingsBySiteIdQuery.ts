/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DrawingFilter, DrawingSort } from "./globalTypes";

// ====================================================
// GraphQL query operation: drawingsBySiteIdQuery
// ====================================================

export interface drawingsBySiteIdQuery_drawingsQuery_nodes {
  __typename: "Drawing";
  Description: string | null;
  Number: string | null;
  SheetNo: string | null;
}

export interface drawingsBySiteIdQuery_drawingsQuery_pageInfo {
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

export interface drawingsBySiteIdQuery_drawingsQuery {
  __typename: "DrawingConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (drawingsBySiteIdQuery_drawingsQuery_nodes | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: drawingsBySiteIdQuery_drawingsQuery_pageInfo;
  totalCount: number;
}

export interface drawingsBySiteIdQuery {
  /**
   * Get the data form the Drawing table
   */
  drawingsQuery: drawingsBySiteIdQuery_drawingsQuery | null;
}

export interface drawingsBySiteIdQueryVariables {
  after?: string | null;
  before?: string | null;
  first?: any | null;
  last?: any | null;
  where?: DrawingFilter | null;
  order_by?: DrawingSort | null;
}
