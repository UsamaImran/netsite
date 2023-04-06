import {
  ClientSiteUserPermissionFilter,
  ComponentInventoryFilter,
  InvoiceFilter,
  ProposalFilter,
  RouteFilter,
  ServiceDocumentFilter,
  DrawingFilter,
} from "../../../generated/globalTypes";
import { AllDrawingsList } from "../allDrawings/AllDrawingsList";
import { InventoriesList } from "../inventoriesList/InventoriesList";
import { InvoicesList } from "../invoicesList/InvoicesList";
import { ProposalsList } from "../proposalsList/ProposalsList";
import { RoutesList } from "../routesList/RoutesList";
import { ServiceHistoriesList } from "../serviceHistoriesList/ServiceHistoriesList";
import { SingleTab } from "../singleTab/SingleTab";
import { SiteList } from "../SiteList/SiteList";

export interface ITabsState {
  name: string;
  key: string;
  route:string;
  isActivated: boolean;
  component:
    | typeof RoutesList
    | typeof InventoriesList
    | typeof InvoicesList
    | typeof ServiceHistoriesList
    | typeof ProposalsList
    | typeof SiteList
    | typeof SingleTab
    | typeof AllDrawingsList;
  filter:
    | RouteFilter
    | ComponentInventoryFilter
    | InvoiceFilter
    | ProposalFilter
    | ServiceDocumentFilter
    | ClientSiteUserPermissionFilter
    | DrawingFilter;
}
