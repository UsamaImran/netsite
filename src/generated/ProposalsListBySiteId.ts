/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProposalFilter, ProposalSort } from "./globalTypes";

// ====================================================
// GraphQL query operation: ProposalsListBySiteId
// ====================================================

export interface ProposalsListBySiteId_proposalByClientQuery_nodes {
  __typename: "Proposal";
  clientId: number;
  clientSiteId: number;
  Date: any | null;
  siteName: string | null;
  routeName: string | null;
  ScopeOfWork: string | null;
  Price: any | null;
  PostedBy: string | null;
  documentId: number;
}

export interface ProposalsListBySiteId_proposalByClientQuery_pageInfo {
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

export interface ProposalsListBySiteId_proposalByClientQuery {
  __typename: "ProposalConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (ProposalsListBySiteId_proposalByClientQuery_nodes | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: ProposalsListBySiteId_proposalByClientQuery_pageInfo;
  totalCount: number;
}

export interface ProposalsListBySiteId {
  /**
   * Get the data form the Project
   */
  proposalByClientQuery: ProposalsListBySiteId_proposalByClientQuery | null;
}

export interface ProposalsListBySiteIdVariables {
  after?: string | null;
  before?: string | null;
  first?: any | null;
  last?: any | null;
  where?: ProposalFilter | null;
  order_by?: ProposalSort | null;
}
