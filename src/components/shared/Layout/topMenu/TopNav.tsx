import * as React from 'react';
import { Nav } from 'react-bootstrap';

interface ITopNavProps { }

export const TopNav:React.FC<ITopNavProps> = () => {
/*     const location = useLocation(); */

/*     const activeRoute = (routeName:string) => {
        return location.pathname.startsWith(routeName) ? "active" : "";
        
    } */

/*     const getMenuItems = () => {
        let menuItems:ISubRoute[] = [];
        let groupedDropdowns:{[key:string]:ISubRoute[]} = {};

        if(module.subRoutes){
            let authorizedItems = module.subRoutes.filter(x=>accountContext.AuthorizeRoute(x.authorizedRoles));
            menuItems = authorizedItems.filter(x=>x.menuDisplay && x.dropDown === undefined) as ISubRoute[];
            let dropdowns = authorizedItems.filter(x=>x.dropDown !== undefined);
            groupedDropdowns= groupBy(dropdowns, "dropDown");
        }
        return [menuItems, groupedDropdowns] as const;
    } */

    /* const [menuItems, dropDowns] = getMenuItems(); */

/*     const getDropdownItems = () => {
        let test = Object.keys(dropDowns).map((route, i)=>{
            return (
                <Dropdown  key={`${route}${i}`}>
                    <Dropdown.Toggle color='light' className="light centered-dropdown" variant='link' bsPrefix='dt'>
                        {route}
                        <FontAwesomeIcon icon={faCaretDown} size='1x' />
                    </Dropdown.Toggle>
                    <Dropdown.Menu rootCloseEvent="click" key={`mnu${route}${i}`} className='dropdown-navbar dropdown-menu-left'>
                        {
                            dropDowns[route].map((item)=>{
                                return(
                                    <Dropdown.Item as={NavLink}
                                        key={item.name}
                                        className='nav-item dropdown-item'
                                        to={item.path}>
                                        {item.name}
                                    </Dropdown.Item>
                            )})
                        }
                </Dropdown.Menu>
                </Dropdown>
            )
        })
        return test;
    } */

    return (
                <Nav>
{/*                     <NavLink
                        to={'/'}
                        className="nav-link"
                        activeClassName="active">
                        {/* <i className={route.icon} />}
                        Home
                    </NavLink> */}
                </Nav>
    );
}
