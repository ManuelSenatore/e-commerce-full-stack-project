import { Button } from "@mui/material";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FailureComponent = () => {
  const navigate = useNavigate();

  return (
    <Container className="pageContainer">
      <Row>
        <Col>
        <div className="text-center">
          <h2>PAGAMENTO FALLITO</h2>
          <Button onClick={() => navigate("/carrello")}>Torna al Carrello</Button>
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FailureComponent;
