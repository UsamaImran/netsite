/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ClientSiteFilter } from "./globalTypes";

// ====================================================
// GraphQL query operation: ClientSitesById
// ====================================================

export interface ClientSitesById_getClientSites_nodes {
  __typename: "ClientSite";
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  siteId: string | null;
  siteName: string | null;
  state: string | null;
  zip: string | null;
}

export interface ClientSitesById_getClientSites {
  __typename: "ClientSiteConnection";
  /**
   * A flattened list of the nodes.
   */
  nodes: (ClientSitesById_getClientSites_nodes | null)[] | null;
}

export interface ClientSitesById {
  /**
   * Used for filter data for reporting
   */
  getClientSites: ClientSitesById_getClientSites | null;
}

export interface ClientSitesByIdVariables {
  where?: ClientSiteFilter | null;
}
