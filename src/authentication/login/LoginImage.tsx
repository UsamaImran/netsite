import * as React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const LoginImage: React.FC = (props) => {
  return (
    <>
      <Card className="login-info-section h-100 mb-0">
        <Card.Img
          className="login-image"
          src="http://cdn.orrprotection.com/netsite/login2.jpg"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center px-4 px-md-7">
          <Card.Title>WHAT IS NETSITE?</Card.Title>
          <Card.Text className="pb-4">
            NetSITE provides secure, online access to all critical information
            related to any fire protection system at any facility or site
            serviced by ORR
          </Card.Text>
          <Card.Title>All Documentation Online...</Card.Title>
          <div>
            <ul className="documentation-list">
              for all fire protection systems, located in any facility across
              the country
              <li>Inspections Report</li>
              <li>Proposals/ Pricing</li>
              <li>Invoices</li>
              <li>System Drawings</li>
              <li>Owner Manual's</li>
            </ul>
          </div>
          <div className="login-info-link">
            <div className="login-info-link-hover"></div>
            <Card.Link href="https://www.orrprotection.com/online-reporting/netreport">
              Learn more
            </Card.Link>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};
