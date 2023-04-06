import * as React from 'react';
import { faEnvelopeOpen, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useAccountContext } from '../../../../contexts/AccountContext';

interface IAccountMenuMobileProps {  }

export const AccountMenuMobile:React.FC<IAccountMenuMobileProps> = (props) => {
    const account = useAccountContext();
    return (
      <>
        <hr/>
        <Row>
            <Col xs="3">
                <div className="account-icon">
                    <FontAwesomeIcon icon={faUser} size='4x' />
                </div>
            </Col>
            <Col xs="9">
                <Row>
                    <Col xs="12">
                        <p className="user-name">{account.userName}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Link to="/account">Edit Account</Link>
                    </Col>
                </Row>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col xs={12}>
                <Nav className="flex-column mobile-nav">
                    <NavLink to="/">
                        <FontAwesomeIcon icon={faQuestionCircle} size='1x' />
                        <span>Help</span>
                    </NavLink>
                    <NavLink to="/">
                        <FontAwesomeIcon icon={faEnvelopeOpen} size='1x' />
                        <span>Contact Us</span>
                    </NavLink>
                </Nav>
            </Col>
        </Row>
      </>
    );
}
