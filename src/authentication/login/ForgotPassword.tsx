import * as React from "react";
import { Col, Button, Form } from "react-bootstrap";

interface IReminderLinkProps {}

export const ForgotPassword: React.FC<IReminderLinkProps> = (props) => {
  const handleReminder = (type: IReminderLinkProps) => {
    console.log("Email with password been sent");
  };

  return (
    <>
      <Col lg="12">
        <h3>Password Reset</h3>
        <p>
          Enter your User Name to receive a password reset link at the email
          address on file
        </p>
        <Form.Label htmlFor="inputPassword5">User Name</Form.Label>
        <Form.Control
          type="text"
          id="inputUsername"
          className="mb-4"
          // aria-describedby="passwordHelpBlock"
        />
        <Button
          // className="mb-3 d-flex justify-content-end"
          color="primary"
          onClick={handleReminder}
          size="lg"
        >
          Send Reminder
        </Button>
      </Col>
    </>
  );
};
