import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { AuthorizationRoles } from '../../../authentication/AuthorizationRoles';
import { IRoute } from '../../../routing/routes.interfaces';
import ContactLayout from './contactLayout';
import { Index } from './Index';

export const ContactRoute: IRoute = {
  path: '/regions/contact',
  exact: true, //Path exact for react router
  displayText: 'Contact Form',
  breadcrumb: 'Contact Us',
  icon: faGlobe, // to be used in menu items
  component: Index,
  menuDisplay: true,
  requiresAuth: false,
  authorizedRoles: [AuthorizationRoles.user, AuthorizationRoles.admin],
  layout: ContactLayout,
};
