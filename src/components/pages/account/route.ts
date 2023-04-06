import { faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthorizationRoles } from "../../../authentication/AuthorizationRoles";
import { IRoute } from "../../../routing/routes.interfaces";
import { NoSidebarLayout } from "../../shared/Layout/NoSidebarLayout";
import { Index } from "./Index";

export const AccountRoute: IRoute = {
    path: '/regions/account',
    exact: true, //Path exact for react router
    displayText: "Account",
    breadcrumb: 'My Account',
    icon: faUser, // to be used in menu items
    component: Index,
    menuDisplay: false,
    requiresAuth: true,
    authorizedRoles: [AuthorizationRoles.user, AuthorizationRoles.admin],
    layout: NoSidebarLayout,
}