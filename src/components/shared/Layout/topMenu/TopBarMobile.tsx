import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import * as React from 'react';
import { useState } from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NativeOverlay } from '../../../../shared/NativeOverlay';
import { AccountMenuMobile } from './AccountMenuMobile';

interface ITopBarMobileProps {
  isUserLoggedIn: boolean;
}

export const TopBarMobile: React.FC<ITopBarMobileProps> = (props) => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Navbar className={classNames('navbar-absolute')}>
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
        {props.isUserLoggedIn ? <Nav className="ml-auto">
          <Navbar.Text onClick={() => toggleModal()}>
            <FontAwesomeIcon icon={faUserCog} size='2x' />
          </Navbar.Text>
        </Nav> : null}
      </Navbar>
      <NativeOverlay show={showModal} setShow={toggleModal} header="Account">
        <AccountMenuMobile />
      </NativeOverlay>
    </>
  );
}
