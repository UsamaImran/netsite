import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { AuthorizationRoles } from "../../../authentication/AuthorizationRoles";
import { IRoute } from "../../../routing/routes.interfaces";
import { NoSidebarLayout } from "../../shared/Layout/NoSidebarLayout";
import { Index } from "./Index";

export const DashboardRoute: IRoute = {
    path: '/Dashboard',
    exact: true, //Path exact for react router
    displayText: "Dashboard",
    breadcrumb: 'Regions',
    icon: faGlobe, // to be used in menu items
    component: Index,
    menuDisplay: true,
    requiresAuth: true,
    authorizedRoles: [AuthorizationRoles.user],
    layout: NoSidebarLayout
}