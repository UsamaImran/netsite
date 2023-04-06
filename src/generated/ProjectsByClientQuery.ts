/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProjectFilter, ProjectSort } from "./globalTypes";

// ====================================================
// GraphQL query operation: ProjectsByClientQuery
// ====================================================

export interface ProjectsByClientQuery_projectsByClientQuery_nodes {
  __typename: "Project";
  Date: any | null;
  documentId: number;
  siteName: string | null;
  routeName: string | null;
  Description: string | null;
  jNumber: string | null;
}

export interface ProjectsByClientQuery_projectsByClientQuery_pageInfo {
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

export interface ProjectsByClientQuery_projectsByClientQuery {
  __typename: "ProjectConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (ProjectsByClientQuery_projectsByClientQuery_nodes | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: ProjectsByClientQuery_projectsByClientQuery_pageInfo;
  totalCount: number;
}

export interface ProjectsByClientQuery {
  /**
   * Get the data form the Project
   */
  projectsByClientQuery: ProjectsByClientQuery_projectsByClientQuery | null;
}

export interface ProjectsByClientQueryVariables {
  after?: string | null;
  before?: string | null;
  first?: any | null;
  last?: any | null;
  where?: ProjectFilter | null;
  order_by?: ProjectSort | null;
}
