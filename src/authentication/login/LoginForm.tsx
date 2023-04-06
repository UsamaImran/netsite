import * as React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { AuthError } from "../Authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

export interface ILoginForm {
  login: (username: string, password: string) => void;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
  error?: AuthError | null;
}

export interface ILoginData {
  username: string;
  password: string;
}

export const LoginForm: React.FC<ILoginForm> = (props) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const schema = yup.object().shape({
    username: yup.string().trim().required("Username is required"),
    password: yup.string().trim().required("Password is required"),
  });

  const handleSubmit = async (values: ILoginData) => {
    try {
      props.login(values.username, values.password);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Form as={Col} xs={10} sm={8} md={6} lg={7}>
      <Card className="card-login-form card-white">
        <Card.Header>
          <Card.Title className="login-heading">Welcome</Card.Title>
        </Card.Header>
        <Card.Body>
          {props.error && (
            <div className="login-error-message">{props.error.message} </div>
          )}
          <Form.Group className="mb-3" controlId="validationCustom01">
            {/* <Form.Label>Username</Form.Label> */}
            <FormControl
              name="username"
              isInvalid={formik.touched.username && !!formik.errors.username}
              value={formik.values.username}
              onChange={formik.handleChange}
              type="text"
              placeholder="USERNAME"
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            {/* <Form.Label htmlFor="disabledTextInput">Password</Form.Label> */}
            <InputGroup>
              <FormControl
                name="password"
                isInvalid={formik.touched.password && !!formik.errors.password}
                placeholder="PASSWORD"
                value={formik.values.password}
                type={passwordVisible ? "text" : "password"}
                onChange={formik.handleChange}
              />
              <InputGroup.Text id="basic-addon2">
                <FontAwesomeIcon icon={faEye} onClick={togglePassword} />
              </InputGroup.Text>
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Row className="login-helpers mx-0 d-flex justify-content-between align-items-center">
            <Col className="mb-2 d-flex flex-column justify-content-center">
              <Row
                className="forgot-links d-flex justify-content-md-start justify-content-center align-items-center"
                onClick={() => props.setShowModal("password")}
              >
                <span className="pr-2">Forgot Password</span>
                <FontAwesomeIcon icon={faGreaterThan} size="xs" />
              </Row>
              <Row
                className="forgot-links d-flex justify-content-md-start justify-content-center align-items-center"
                onClick={() => props.setShowModal("username")}
              >
                <span className="pr-2">Forgot Username</span>
                <FontAwesomeIcon icon={faGreaterThan} size="xs" />
              </Row>
            </Col>
            <Col className="d-flex justify-content-md-end justify-content-center pr-0 align-items-center w-100">
              <Button
                className="login-btn"
                color="primary"
                onClick={() => formik.handleSubmit()}
              >
                Log in
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Form>
  );
};
