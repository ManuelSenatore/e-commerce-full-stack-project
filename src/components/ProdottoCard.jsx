import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import ButtonAcquistaComponent from "./ButtonAcquistaComponent";
import LikeComponent from "./LikeComponent";

const ProdottoCard = (props) => {

  return (
    <Col xs={6} sm={6} md={4} className="">
      <Card
        className="cardProdotto"
        key={props.i}
        style={{ border: "none", width: 100 + "%" }}
      >
        <LikeComponent prodotto={props.prodotto}/>  {/* Icona per aggiungere ai preferiti */}
        <Card.Img variant="top" src={props.prodotto.immagineUrl} />
        <Card.Body className="text-center cardButton">
          <ButtonAcquistaComponent prodotto={props.prodotto.id}/> {/* Bottone per aggiungere al carrello */}
          <Card.Title className="mt-2">
            {props.prodotto.nome.substring(0, 20) + "..."}
          </Card.Title>
          <Card.Text style={{ color: "green", fontWeight: "bolder" }}>
            {props.prodotto.prezzo.toString().split(".")[0]},
            {props.prodotto.prezzo.toString().split(".")[1]
              ? props.prodotto.prezzo.toString().split(".")[1].slice(0, 2)
                  .length === 1
                ? props.prodotto.prezzo.toString().split(".")[1].slice(0, 2) +
                  "0"
                : props.prodotto.prezzo.toString().split(".")[1].slice(0, 2) +
                  ""
              : "00"}{" "}
            €
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProdottoCard;
