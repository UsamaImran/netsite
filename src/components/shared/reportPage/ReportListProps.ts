import { ComponentInventoryFilter, InvoiceFilter, ProposalFilter, RouteFilter, ServiceDocumentFilter } from "../../../generated/globalTypes";

export interface IReportListProps {
    filter: RouteFilter | ComponentInventoryFilter | InvoiceFilter | ProposalFilter | ServiceDocumentFilter
}
