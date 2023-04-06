import * as React from "react";
import { Col, Button, Form } from "react-bootstrap";
// import { useAccountContext } from "../contexts/AccountContext";

interface IForgotPasswordProps {}

export const ForgotUsername: React.FC<IForgotPasswordProps> = (props) => {
  // const account = useAccountContext();

  const handleUsernameReminder = () => {
    console.log("Email has been sent");
  };

  return (
    <>
      <Col lg="12">
        <h3>User Name Recovery</h3>
        <p>Enter you email address to receive a User Name Reminder</p>
        <Form.Label htmlFor="inputPassword5">Email address</Form.Label>
        <Form.Control type="text" id="inputUsername" className="mb-4" />
        <Button color="primary" onClick={handleUsernameReminder} size="lg">
          Send Reminder
        </Button>
      </Col>
    </>
  );
};
