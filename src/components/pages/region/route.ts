import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { AuthorizationRoles } from "../../../authentication/AuthorizationRoles";
import { IRoute } from "../../../routing/routes.interfaces";
import { NoSidebarLayout } from "../../shared/Layout/NoSidebarLayout";
import { Index } from "./Index";

export const RegionRoute: IRoute = {
  path: "/regions/:id/:route?",
  exact: true, //Path exact for react router
  displayText: "Region",
  // breadcrumb: 'Region',
  icon: faGlobe, // to be used in menu items
  component: Index,
  menuDisplay: true,
  requiresAuth: false,
  authorizedRoles: [AuthorizationRoles.user, AuthorizationRoles.admin],
  layout: NoSidebarLayout,
};
