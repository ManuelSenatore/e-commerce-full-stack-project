import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { GrFavorite } from "react-icons/gr";

const ProdottoCard = (props) => {
  return (
    <Col xs={6} sm={6} md={4} className="">
      <Card
        className="cardProdotto"
        key={props.i}
        style={{ border: "none", width: 100 + "%" }}
      >
        <GrFavorite className="favoriteIcon" />
        <Card.Img variant="top" src={props.prodotto.immagineUrl} />
        <Card.Body className="text-center cardButton">
          <Button className="buttonCart" variant="outline-primary">
            Aggiungi al Carrello
          </Button>
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
