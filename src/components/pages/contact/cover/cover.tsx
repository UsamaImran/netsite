import React from 'react';
import { Row, Col } from 'react-bootstrap';
import coverImage from '../../../../assets/images/contact.jpg';
import {
  faMapMarker,
  faEnvelope,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Cover: React.FC = () => {
  const mail = 'contact@contactinfo.com ';
  const whatsAppNumber = '(0800) 555-1212';
  const location = 'P.O. Box 198029, Louisville, KY. 40259';
  const coverStyles = {
    backgroundImage: `url(${coverImage})`,
    backgroundColor: 'rgba(0,0,0,0.8)',
    backgroundBlendMode: 'darken',
    width: '100%',
    height: '430px',
    color: 'white',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties;

  const headingStyles = {
    color: 'white',
    fontWeight: 700,
    fontSize: '45px',
  } as React.CSSProperties;

  const labelStyles = {
    fontSize: '20px',
    marginBottom: '10px',
  } as React.CSSProperties;

  const iconStyles = {
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties;

  return (
    <Row style={coverStyles} className='mb-2 p-1 '>
      <Col sm='3' xs='2' lg='1'></Col>
      <Col className={`ml-4 `}>
        <h1 style={headingStyles}> Contact Us</h1>
        <Row className='mb-3'>
          <Col>
            <i className='tim-icons' style={iconStyles}>
              <FontAwesomeIcon icon={faEnvelope} size='2x' /> &nbsp; &nbsp;
              <span style={labelStyles}>{mail}</span>
            </i>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <i className='tim-icons' style={iconStyles}>
              <FontAwesomeIcon icon={faArrowDown} size='2x' /> &nbsp; &nbsp;
              <span style={labelStyles}>{whatsAppNumber} </span>
            </i>
          </Col>
        </Row>
        <Row>
          <Col>
            <i className='tim-icons' style={iconStyles}>
              <FontAwesomeIcon icon={faMapMarker} size='2x' /> &nbsp; &nbsp;
              <span style={labelStyles}>{location}</span>
            </i>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Cover;
