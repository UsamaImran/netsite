/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ClientFilter, ClientSort } from "./globalTypes";

// ====================================================
// GraphQL query operation: clientQuery
// ====================================================

export interface clientQuery_getClients_nodes {
  __typename: "Client";
  clientMasterId: number | null;
  clientName: string | null;
  clientNotes: string | null;
  dateCreated: any | null;
  jitterbit_UID: string | null;
  jointCommission: boolean | null;
  lastModifiedDate: any | null;
  lastModifiedUser: string | null;
  nAPR: string | null;
  odoo_ref_partner: number | null;
  organizationId: string | null;
  orr_Distribution_Emails: string | null;
  sVMXAccountId: string | null;
  sVMXParentId: string | null;
  viewInspectionTime: number | null;
}

export interface clientQuery_getClients {
  __typename: "ClientConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (clientQuery_getClients_nodes | null)[] | null;
}

export interface clientQuery {
  /**
   * User to filter clients for reporting
   */
  getClients: clientQuery_getClients | null;
}

export interface clientQueryVariables {
  after?: string | null;
  before?: string | null;
  first?: any | null;
  last?: any | null;
  where?: ClientFilter | null;
  order_by?: ClientSort | null;
}
