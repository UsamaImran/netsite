import * as React from 'react';
import { Navbar, NavbarBrand, Nav, Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { TopNav } from './TopNav';
import { useAccountContext } from '../../../../contexts/AccountContext';
import { routes } from '../../../../shared/breadcrumbs/Breadcrumbs';

interface ITopBarDesktopProps {
  isUserLoggedIn: boolean;
}

export const TopBarDesktop: React.FC<ITopBarDesktopProps> = (props) => {

  const accountContext = useAccountContext();

  return (
    <Navbar className={classNames('navbar-absolute', 'desktop')} expand='lg'>

      <Nav navbar>
        {/*           <Dropdown>
            <Dropdown.Toggle color='light' className="light" variant='link' bsPrefix='dt'>
              <FontAwesomeIcon icon={faTh} size='2x' />
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown-navbar dropdown-menu-left'>
              {getMenuRoutes().map((route, i) => {
                return (
                    <NavLink
                      key={route}
                      className='nav-item dropdown-item'
                      to={MicroSites[route].routes.path}>
                      {MicroSites[route].routes.name}
                    </NavLink>
                );
              })}
            </Dropdown.Menu>
          </Dropdown> */}
      </Nav>
      <NavLink to={'/'}>
        <NavbarBrand>
          <img
            src="https://cdn.orrprotection.com/netsite/orr_green_white.png"
            height="50"
            className="d-inline-block align-top"
            alt="ORR Portal"
          />
        </NavbarBrand>
      </NavLink>
      <TopNav />

      {props.isUserLoggedIn ? <Nav className="ml-auto">
        <Dropdown>
          <Dropdown.Toggle color='light' className="light" variant='link' bsPrefix='dt'>
            {accountContext.name} <FontAwesomeIcon icon={faCaretDown} size='1x' />
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropdown-navbar'>
            <NavLink
              key={routes.Account.displayText}
              className='nav-item dropdown-item'
              to={routes.Account.path}>
              {routes.Account.displayText}
            </NavLink>
            <NavLink
              className='nav-item dropdown-item'
              to="/contact">
              Contact Us
                    </NavLink>
            <Dropdown.Item onClick={() => accountContext.Logout()}>
              Logout
                    </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav> : null}
    </Navbar>
  );
};
