import * as React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import {
  Button,
  Card,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useIsPhoneContext } from '../../../../contexts/IsPhoneContext';
export interface IResetPasswordFormProps {
  updatePassword: (password: string) => void;
}
export interface IResetPasswordData {
  password: string;
  confirmPassword: string;
}

export const ResetPasswordForm: React.FC<IResetPasswordFormProps> = (props) => {
  const isPhone = useIsPhoneContext();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(
    false
  );
  const history = useHistory();
  const schema = yup.object().shape({
    password: yup.string().trim().required('Password is required'),
    confirmPassword: yup
      .string()
      .trim()
      .required('Confirm Password is Required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const handleSubmit = async (values: IResetPasswordData) => {
    try {
      props.updatePassword(values.password);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const togglePassword = React.useCallback(() => {
    setPasswordVisible(!passwordVisible);
  }, [passwordVisible, setPasswordVisible]);

  const toggleConfirmPassword = React.useCallback(() => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  }, [confirmPasswordVisible, setConfirmPasswordVisible]);

  const formStyle = {
    width: '100%',
    padding: 0,
    margin: 0,
  };

  const mobileButtonsStyle = {
    width: '100%',
    marginLeft: '0px',
  };

  const getButtons = () => {
    return (
      <>
        <Button
          color='primary'
          onClick={() => history.push('/')}
          size='lg'
          style={isPhone ? mobileButtonsStyle : undefined}
        >
          Cancel
        </Button>
        <Button
          color='primary'
          onClick={() => formik.handleSubmit()}
          size='lg'
          style={isPhone ? mobileButtonsStyle : undefined}
        >
          Reset Password
        </Button>
      </>
    )
  }

  return (
    <Form as={Col} xs={12} sm={8} md={6} lg={5} style={formStyle}>
      <Card className='card-login-form card-white'>
        <Card.Header>
          <Card.Title className='login-heading'>Reset your password</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='disabledTextInput'>New Password</Form.Label>
            <InputGroup>
              <FormControl
                name='password'
                isInvalid={formik.touched.password && !!formik.errors.password}
                placeholder='New Password'
                value={formik.values.password}
                type={passwordVisible ? 'text' : 'password'}
                onChange={formik.handleChange}
              />
              <InputGroup.Text id='basic-addon2'>
                <FontAwesomeIcon icon={faEye} onClick={togglePassword} />
              </InputGroup.Text>
              <Form.Control.Feedback type='invalid'>
                {formik.errors.password}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label htmlFor='disabledTextInput'>
              Reenter Password
            </Form.Label>
            <InputGroup>
              <FormControl
                name='confirmPassword'
                isInvalid={
                  formik.touched.confirmPassword &&
                  !!formik.errors.confirmPassword
                }
                placeholder='Reenter Password'
                value={formik.values.confirmPassword}
                type={confirmPasswordVisible ? 'text' : 'password'}
                onChange={formik.handleChange}
              />
              <InputGroup.Text id='basic-addon2'>
                <FontAwesomeIcon icon={faEye} onClick={toggleConfirmPassword} />
              </InputGroup.Text>
              <Form.Control.Feedback type='invalid'>
                {formik.errors.confirmPassword}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          {isPhone ? getButtons() : (
            <Col className='mb-3 d-flex justify-content-end'>
              <Row>
                {getButtons()}
              </Row>
            </Col>
          )}
        </Card.Body>
      </Card>
    </Form>
  );
};
