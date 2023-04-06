import * as React from "react";
import { NavLink } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { IRoutes } from "../../routing/routes.interfaces";
import { AccountRoute } from "../../components/pages/account/route";
import { DashboardRoute } from "../../components/pages/dashboard/route";
import { SiteRoute } from "../../components/pages/site/route";
import { RegionsRoute } from "../../components/pages/regions/route";
import { RegionRoute } from "../../components/pages/region/route";
import { SiteRouteInfoRoute } from "../../components/pages/siteRouteInfo/route";
import { ContactRoute } from "../../components/pages/contact/route";

export const routes: IRoutes = {
    Account: AccountRoute,
    Contact: ContactRoute,
    Dashboard: DashboardRoute,
    Site: SiteRoute,
    Regions: RegionsRoute,
    Region: RegionRoute,
    SiteRouteInfo: SiteRouteInfoRoute,
};

const excludedPathsFromBreadCrumb = ['']

export const Breadcrumbs = withBreadcrumbs(Object.keys(routes).map(key => {
    const route = routes[key];
    return {
        path: route.path,
        exact: route.exact,
        breadcrumb: route.breadcrumb
    }
}), {
    excludePaths: excludedPathsFromBreadCrumb
})(({ breadcrumbs }) => (
    <div style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        padding: '15px 0 15px 0',
        fontSize: '1rem'
    }}>
        {breadcrumbs.map((crumb: any, i, arr) => {
            const isLastElement = arr.length - 1 === i;

            let LinkElement: any = React.Fragment;
            let props = {};

            if (!isLastElement) {
                LinkElement = NavLink;
                props = crumb && crumb.match && { href: crumb.match.url, to: crumb.match.url };
            }

            return (
                <React.Fragment key={crumb.match.url}>
                    <LinkElement {...props}>
                        <div
                        >{crumb.breadcrumb}</div>
                    </LinkElement>

                    { !isLastElement && <span>&nbsp;&gt;&nbsp;</span>}
                </React.Fragment>
            );
        })}
    </div >
));