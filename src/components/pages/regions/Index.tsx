import { faCalendar, faPhone, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { SimpleCard } from '../../shared/Cards/SimpleCard';
import { RegionTable } from './RegionTable';

///REplace with Query
export interface ItestData {
  Name:string;
}

const TestData1:ItestData[] = [
  {Name:"Test1"},
  {Name:"Test2"},
  {Name:"Test3"},
  {Name:"Test1"},
  {Name:"Test2"},
  {Name:"Test3"},
  {Name:"Test1"},
  {Name:"Test2"},
  {Name:"Test3"},
  {Name:"Test1"},
  {Name:"Test2"},
  {Name:"Test3"}
]

const TestData:ItestData[] = [
  {Name:"Test1"},
  {Name:"Test2"},
  {Name:"Test3"}
]

interface IIndexProps {  }

export const Index:React.FC<IIndexProps> = ({children}) => {

  //const account = useAccountContext();
  //Test Data will be updated with GQL Query

    return (
      <>
      <Row>
        <Col md="4">
          <SimpleCard loading={false} header="Regions">
            <RegionTable TestData={TestData1}/>
          </SimpleCard>
        </Col>
        <Col md="8">
          <Row>
            <Col>
              <Nav
                  className='nav-pills-icons justify-content-center'
                  variant='pills'
                  defaultActiveKey='/home'
                >
                  <Nav.Item>
                    <Nav.Link
                      className='active nav-link'
                      href="/">
                      <i className='tim-icons'>
                        <FontAwesomeIcon icon={faCalendar} size="2x" />
                      </i>
                      Schedule Service
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className='active nav-link'
                      href="/">
                      <i className='tim-icons'>
                        <FontAwesomeIcon icon={faPhone} size="2x" />
                      </i>
                      Contact Us
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className='active nav-link'
                      href="/">
                      <i className='tim-icons'>
                        <FontAwesomeIcon icon={faQuestion} size="2x" />
                      </i>
                      FAQ
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className='active nav-link'
                      href="/">
                      <i className='tim-icons'>
                        <FontAwesomeIcon icon={faUser} size="2x" />
                      </i>
                      Account
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <SimpleCard loading={false} header="Service History">
                <RegionTable TestData={TestData}/>
              </SimpleCard>
            </Col>
            <Col md="6">
              <SimpleCard loading={false} header="Recent Invoices">
                <RegionTable TestData={TestData}/>
              </SimpleCard>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleCard loading={false} header="Routine Service">
                <RegionTable TestData={TestData}/>
              </SimpleCard>
            </Col>
          </Row>
        </Col>
      </Row>
      </>
    );
}
