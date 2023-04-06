import { faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthorizationRoles } from "../AuthorizationRoles";
import { IRoute } from "../../routing/routes.interfaces";
import { NoSidebarLayout } from "../../components/shared/Layout/NoSidebarLayout";
import { Unauthorized } from "./Unauthorized";

export const UnauthorizedRoute: IRoute = {
  path: "/unauthorized",
  exact: true, //Path exact for react router
  displayText: "Unauthorized",
  icon: faUser, // to be used in menu items
  component: Unauthorized,
  menuDisplay: false,
  requiresAuth: false,
  authorizedRoles: [AuthorizationRoles.user, AuthorizationRoles.admin],
  layout: NoSidebarLayout,
};
