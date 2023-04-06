import * as React from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';
import { useContactForm } from '../../../shared/Form/hook/useContactForm';
interface IUserTableFormProps {}
export const ContactForm: React.FC<IUserTableFormProps> = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const inputStyles = {
    backgroundColor: 'white',
    height: '50px',
    border: '1px solid #dbdbdb',
    boxShadow: '0.5px 0.5px 5px  lightgray inset',
  } as React.CSSProperties;

  const textAreaStyles = {
    backgroundColor: 'white',
    maxHeight: '75%',
    border: '1px solid lightgray',
    boxShadow: '0.5px 0.5px 5px  lightgray inset',
  } as React.CSSProperties;
  return (
    <>
      <Container>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Row style={{ marginTop: '10%', marginBottom: '20px' }}>
              <Form.Group as={Col} lg='10' sm='12'>
                <Form.Control
                  style={inputStyles}
                  type='text'
                  name='name'
                  value={values.name || ''}
                  onChange={handleChange}
                  placeholder={values?.name || 'Name'}
                  isInvalid={touched.name && !!errors.name}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row className='mb-4'>
              <Form.Group as={Col} lg='10' sm='12'>
                <Form.Control
                  style={inputStyles}
                  name='email'
                  type='text'
                  value={values.email || ''}
                  onChange={handleChange}
                  placeholder={values?.email || 'Email'}
                  isInvalid={touched.email && !!errors.email}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row className='mb-4'>
              <Form.Group as={Col} md='12' sm='12'>
                <Form.Control
                  style={inputStyles}
                  name='subject'
                  type='text'
                  value={values.subject || ''}
                  onChange={handleChange}
                  placeholder={values?.subject || 'Subject'}
                  isInvalid={touched.subject && !!errors.subject}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.subject}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} lg='12' sm='12'>
                <Form.Control
                  style={textAreaStyles}
                  as='textarea'
                  name='message'
                  rows={9}
                  value={values.message || ''}
                  onChange={handleChange}
                  placeholder={values?.message || 'Message'}
                  isInvalid={touched.message && !!errors.message}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row className='d-flex justify-content-end'>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form.Row>
          </Form>
        </Col>
      </Container>
    </>
  );
};
