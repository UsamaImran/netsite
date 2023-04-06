import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { AuthorizationRoles } from "../authentication/AuthorizationRoles";

export interface IRoute {
  path: string;
  exact: boolean; //Path exact for react router
  displayText: string;
  breadcrumb?: string;
  icon: IconDefinition; // to be used in menu items
  component: React.FC<IRoute>;
  layout: React.FC;
  menuDisplay: boolean;
  requiresAuth: boolean;
  authorizedRoles: AuthorizationRoles[];
}

export interface IRoutes {
  [key: string]: IRoute;
  Dashboard: IRoute;
  Account: IRoute;
  Region: IRoute;
  Regions: IRoute;
}
