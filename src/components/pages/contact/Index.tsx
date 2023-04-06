import * as React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useIsPhoneContext } from '../../../contexts/IsPhoneContext';
import { SimpleCard } from '../../shared/Cards/SimpleCard';
import { AccordionItem } from './accordion/accordion';
import Cover from './cover/cover';
import { ContactForm } from './form/ContactForm';

interface IIndexProps {}

export const Index: React.FC<IIndexProps> = () => {
  const isPhone = useIsPhoneContext();
  const [accordionData] = React.useState([
    { title: 'Frequently Asked Question 1', data: 'Why are you asking?' },
    { title: 'Frequently Asked Question 2', data: 'Why are you asking?' },
    { title: 'Frequently Asked Question 3', data: 'Why are you asking?' },
    { title: 'Frequently Asked Question 4', data: 'Why are you asking?' },
    { title: 'Frequently Asked Question 5', data: 'Why are you asking?' },
  ]);

  const absoluteStyles = {
    position: 'absolute',
    top: 200,
    right: 120,
    height: 'auto',
    borderRadius: '4px',
  } as React.CSSProperties;

  const contactMobileStyle = {
    marginBottom: '10px',
    marginRight: '20px',
  } as React.CSSProperties;

  const cardStyle = {
    backgroundColor: '#F0F0F0',
    zIndex: 21,
    boxShadow: '2px 2px 2px #aaaaaa',
  } as React.CSSProperties;

  return (
    <>
      <Row>
        <Cover />
      </Row>
      <Row className='mr-1'>
        <Col lg='1'></Col>
        <Col
          lg={{ span: 5, order: 1 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
          className='pl-4 pr-4 mt-4'
        >
          {accordionData.map((item, index) => {
            return (
              <div className='mb-4' key={index}>
                <AccordionItem accordoionData={item} />
              </div>
            );
          })}
        </Col>

        <Col
          lg={{ span: 5, order: 2 }}
          sm={{ span: 12, order: 1 }}
          xs={{ span: 12, order: 1 }}
          style={!isPhone ? absoluteStyles : contactMobileStyle}
          className='pl-3 pr-4 ml-2'
        >
          <SimpleCard loading={false} header='' style={cardStyle}>
            <Container>
              <ContactForm />
            </Container>
          </SimpleCard>
        </Col>
      </Row>
    </>
  );
};
