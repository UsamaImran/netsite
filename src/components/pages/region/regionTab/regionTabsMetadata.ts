import { AllDrawingsList } from "../../../shared/allDrawings/AllDrawingsList";
import { AllProjectDocuments } from "../../../shared/allProjectDocuments/AllProjectDocumentsList";
import { InventoriesList } from "../../../shared/inventoriesList/InventoriesList";
import { InvoicesList } from "../../../shared/invoicesList/InvoicesList";
import { ProposalsList } from "../../../shared/proposalsList/ProposalsList";
import { ServiceHistoriesList } from "../../../shared/serviceHistoriesList/ServiceHistoriesList";
import { SiteList } from "../../../shared/SiteList/SiteList";
import { ITabsState } from "../../../shared/Tabs/TabsState";

export const getRegionTabsMetadata = (id: string): ITabsState[] => {
  const filter = {
    clientId: +id,
  };

  return [
    {
      name: "Site List",
      key: "Sites",
      route: "sites",
      isActivated: false,
      component: SiteList,
      filter: filter,

    },
    {
      name: "All invoices",
      key: "Invoices",
      route: "invoices",
      isActivated: false,
      component: InvoicesList,
      filter: filter,
    },
    {
      name: "All Service History",
      key: "ServiceHistory",
      route: "serviceHistory",
      isActivated: false,
      component: ServiceHistoriesList,
      filter: filter,
    },
    {
      name: "All Project Documents",
      key: "ProjectDocuments",
      route: "projectDocuments",
      isActivated: false,
      component: AllProjectDocuments,
      filter: filter,
    },
    {
      name: "All Proposals",
      key: "Proposals",
      route: "proposals",
      isActivated: false,
      component: ProposalsList,
      filter: filter,
    },
    {
      name: "All Drawings",
      key: "Drawings",
      route: "drawings",
      isActivated: false,
      component: AllDrawingsList,
      filter: filter,
    },
    {
      name: "Inventory Report",
      key: "SiteInventory",
      route: "inventoryReport",
      isActivated: false,
      component: InventoriesList,
      filter: filter,
    },
  ];
};
