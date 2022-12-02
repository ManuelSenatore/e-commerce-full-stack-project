import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FailureComponent = () => {
  return (
    <Container className="pageContainer">
      <Row>
        <Col>
          <h2>Failed</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default FailureComponent;
