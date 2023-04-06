import * as React from "react";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ModalOverlay } from "../../shared/ModalOverlay";
import { ForgotPassword } from "./ForgotPassword";
import { ForgotUsername } from "./ForgotUsername";
import { LoginImage } from "./LoginImage";
import { LoginForm } from "./LoginForm";
import { AuthError } from "../Authentication";

export interface ILogin {
  login: (username: string, password: string) => void;
  error?: AuthError | null;
}

export const Login: React.FC<ILogin> = ({ login, error }) => {
  const [showModal, setShowModal] = useState<string>("");
  const handleToggleModal = () => setShowModal("");

  return (
    <div className="content h-100">
      {showModal === "username" && (
        <ModalOverlay
          show={!!showModal}
          setShow={handleToggleModal}
          header="Forgot User Name"
        >
          <ForgotUsername />
        </ModalOverlay>
      )}
      {showModal === "password" && (
        <ModalOverlay
          show={!!showModal}
          setShow={handleToggleModal}
          header="Forgot Password"
        >
          <ForgotPassword />
        </ModalOverlay>
      )}
      <Row className="login-container h-100 m-0">
        <Col xs={12} md={12} lg={7} className="h-100 p-0">
          <Container
            fluid
            className="d-flex align-items-center justify-content-center h-100"
          >
            <LoginForm
              login={login}
              error={error}
              setShowModal={setShowModal}
            />
          </Container>
        </Col>
        <Col xs={12} md={12} lg={5} className="h-100 px-0">
          <LoginImage />
        </Col>
      </Row>
    </div>
  );
};
