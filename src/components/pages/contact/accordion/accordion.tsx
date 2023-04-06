import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion, Card, Row, Col } from 'react-bootstrap';
interface IAccordionInformation {
  accordoionData: {
    title: string;
    data: string;
  };
}
export const AccordionItem: React.FC<IAccordionInformation> = (props) => {
  const { accordoionData } = props;
  const { title, data } = accordoionData;

  const itemStyle = {
    boxShadow: '4px 4px 4px #aaaaaa',
    cursor: 'pointer',
    borderRadius: '10px',
  } as React.CSSProperties;

  const headerStyle = {
    backgroundColor: '#F0F0F0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties;

  const dataStyles = {
    fontWeight: 'bold',
    color: '#666',
  } as React.CSSProperties;

  return (
    <div style={itemStyle}>
      <Accordion defaultActiveKey='1'>
        <Card>
          <Card.Header style={headerStyle}>
            <Accordion.Toggle as={Col} variant='link' eventKey='0'>
              <Row>
                <Col lg='11' xs='10'>
                  <h4 style={dataStyles}>{title} </h4>
                </Col>
                <Col lg='1' xs='1'>
                  <h6>
                    <i className='tim-icons'>
                      <FontAwesomeIcon icon={faAngleDown} size='2x' /> &nbsp;
                      &nbsp;
                    </i>
                  </h6>
                </Col>
              </Row>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body style={dataStyles}>{data}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};
