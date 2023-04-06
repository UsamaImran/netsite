import * as React from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { UserDetail_users_nodes } from "../../../generated/UserDetail";
import { useForm } from "./hook/useForm";

interface IUserTableFormProps {
  User: UserDetail_users_nodes;
}

export const UserForm: React.FC<IUserTableFormProps> = ({ User }) => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    disabled,
    handleToggleForm,
    touched,
  } = useForm(User);

  return (
    <>
      <Row>
        <Col xs={12} md={{span:10, offset:1}}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="6" xs="12">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName || ""}
                  onChange={handleChange}
                  placeholder={values?.firstName || "First Name"}
                  isInvalid={touched.firstName && !!errors.firstName}
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="1" xs="12">
                <Form.Label>MI</Form.Label>
                <Form.Control
                  type="text"
                  name="middleInitial"
                  value={values.middleInitial || ""}
                  onChange={handleChange}
                  placeholder={values?.middleInitial || "MI"}
                  isInvalid={touched.middleInitial && !!errors.middleInitial}
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.middleInitial}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="5" xs="12">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName || ""}
                  onChange={handleChange}
                  placeholder={values?.lastName || "Last Name"}
                  isInvalid={touched.lastName && !!errors.lastName}
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" xs="12">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  value={values.password || ""}
                  onChange={handleChange}
                  placeholder={values?.password || "Password"}
                  isInvalid={touched.password && !!errors.password}
                  autoComplete="on"
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" xs="12">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  name="confirmedPassword"
                  onChange={handleChange}
                  value={values.confirmedPassword || ""}
                  type="password"
                  placeholder={"Confirm Password"}
                  isInvalid={
                    touched.confirmedPassword && !!errors.confirmedPassword
                  }
                  autoComplete="on"
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmedPassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" xs="12">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control
                  type="text"
                  name="addressLine1"
                  value={values.addressLine1 || ""}
                  onChange={handleChange}
                  placeholder={values?.addressLine1 || "Address Line 1"}
                  isInvalid={touched.addressLine1 && !!errors.addressLine1}
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.addressLine1}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" xs="12">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control
                  type="text"
                  name="addressLine2"
                  value={values.addressLine2 || ""}
                  onChange={handleChange}
                  placeholder={values?.addressLine2 || "Address Line 2"}
                  isInvalid={touched.addressLine2 && !!errors.addressLine2}
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.addressLine2}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="8" xs="12">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={values.city || ""}
                  onChange={handleChange}
                  placeholder={values?.city || "City"}
                  isInvalid={touched.city && !!errors.city}
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" xs="12">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={values.state || ""}
                  onChange={handleChange}
                  placeholder={values?.state || "State"}
                  isInvalid={touched.state && !!errors.state}
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" xs="12">
                <Form.Label>ZIP</Form.Label>
                <Form.Control
                  type="text"
                  value={values.zip || ""}
                  name="zip"
                  onChange={handleChange}
                  placeholder={values?.zip || "ZIP"}
                  isInvalid={touched.zip && !!errors.zip}
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" xs="12">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  value={values?.phoneNumber || ""}
                  name="phoneNumber"
                  onChange={handleChange}
                  isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                  placeholder={values?.phoneNumber || "Phone"}
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" xs="12">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobileNumber"
                  value={values.mobileNumber || ""}
                  onChange={handleChange}
                  placeholder={values?.mobileNumber || "Mobile phone"}
                  isInvalid={touched.mobileNumber && !!errors.mobileNumber}
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mobileNumber}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} xs="12">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="eMailAddress"
                  type="text"
                  value={values.eMailAddress || ""}
                  onChange={handleChange}
                  placeholder={values?.eMailAddress || "Email"}
                  isInvalid={touched.eMailAddress && !!errors.eMailAddress}
                  disabled={disabled}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.eMailAddress}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row className="d-flex justify-content-end">
              {disabled ? (
                <Button variant="primary" onClick={handleToggleForm}>
                  Edit
                </Button>
              ) : (
                <>
                  <Button variant="primary" onClick={handleToggleForm}>
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </>
              )}
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};
