import { Button } from '@mui/material';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const SuccessComponent = () => {
  const navigate = useNavigate();

  return (
    <Container className="pageContainer">
      <Row>
        <Col>
        <div className="text-center">
          <h2>PAGAMENTO EFFETTUATO CON SUCCESSO</h2>
          <Button onClick={() => navigate("/")}>Torna alla Home</Button>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SuccessComponent
