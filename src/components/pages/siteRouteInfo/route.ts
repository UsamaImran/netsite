import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { AuthorizationRoles } from "../../../authentication/AuthorizationRoles";
import { IRoute } from "../../../routing/routes.interfaces";
import { NoSidebarLayout } from "../../shared/Layout/NoSidebarLayout";
import { Index } from "./Index";

export const SiteRouteInfoRoute: IRoute = {
    path: '/regions/:regionId/sites/:id/:route?/:routeId',
    exact: true, //Path exact for react router
    displayText: "Route Information",
    // breadcrumb: 'Route',
    icon: faGlobe, // to be used in menu items
    component: Index,
    menuDisplay: true,
    requiresAuth: false,
    authorizedRoles: [AuthorizationRoles.user, AuthorizationRoles.admin],
    layout: NoSidebarLayout
}