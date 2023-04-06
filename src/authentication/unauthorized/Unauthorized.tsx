import * as React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

interface IIndexProps {}

export const Unauthorized: React.FC<IIndexProps> = (props) => {
  const history = useHistory();

  const handleBack = () => {
    history.push("/login");
  };

  return (
    <>
      <Container className="pl-0 pr-0 unauthorized-container" fluid>
        <Row>
          <Col className="unauthorized-warning-col">
            <Card className="card-unauthorized card-white">
              <Card.Body>
                <Card.Title className="unauthorized-heading">
                  Unaunthorized
                </Card.Title>
                <Card.Text className="mb-4">
                  Something has gone wrong. Please navigate back to the
                  beginning...
                </Card.Text>
                <Button
                  variant="primary"
                  className="unauthorizedBtn"
                  size="lg"
                  onClick={handleBack}
                >
                  Back home
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>Picture</Col>
        </Row>
      </Container>
    </>
  );
};
