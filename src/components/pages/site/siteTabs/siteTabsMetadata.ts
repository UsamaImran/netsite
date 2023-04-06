import { AllDrawingsList } from "../../../shared/allDrawings/AllDrawingsList";
import { AllProjectDocuments } from "../../../shared/allProjectDocuments/AllProjectDocumentsList";
import { InventoriesList } from "../../../shared/inventoriesList/InventoriesList";
import { InvoicesList } from "../../../shared/invoicesList/InvoicesList";
import { ProposalsList } from "../../../shared/proposalsList/ProposalsList";
import { RoutesList } from "../../../shared/routesList/RoutesList";
import { ServiceHistoriesList } from "../../../shared/serviceHistoriesList/ServiceHistoriesList";
import { ITabsState } from "../../../shared/Tabs/TabsState";

export const getSiteTabsMetadata = (id: string): ITabsState[] => {
  const filter = {
    clientSiteId: +id,
  };

  return [
    {
      name: "Route List",
      key: "Routes",
      route: "routes",
      isActivated: true,
      component: RoutesList,
      filter: filter,
    },
    {
      name: "Invoices",
      key: "Invoices",
      route: "invoices",
      isActivated: false,
      component: InvoicesList,
      filter: filter,
    },
    {
      name: "Service History",
      key: "ServiceHistory",
      route: "serviceHistory",
      isActivated: false,
      component: ServiceHistoriesList,
      filter: filter,
    },
    {
      name: "Project Documents",
      key: "ProjectDocuments",
      route: "projectDocuments",
      isActivated: false,
      component: AllProjectDocuments,
      filter: filter,
    },
    {
      name: "Proposals",
      key: "Proposals",
      route: "proposals",
      isActivated: false,
      component: ProposalsList,
      filter: filter,
    },
    {
      name: "Drawings",
      key: "Drawings",
      route: "drawings",
      isActivated: false,
      component: AllDrawingsList,
      filter: filter,
    },
    {
      name: "Site Inventory",
      key: "SiteInventory",
      route: "siteInventory",
      isActivated: false,
      component: InventoriesList,
      filter: filter,
    },
  ];
};
