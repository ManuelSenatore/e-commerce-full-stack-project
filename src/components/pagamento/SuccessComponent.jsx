import { Button } from '@mui/material';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const SuccessComponent = () => {
  const navigate = useNavigate();
  const carrelloList = useSelector((state) => state.carrello.carrelloList);
  const dispatch = useDispatch();
  
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
