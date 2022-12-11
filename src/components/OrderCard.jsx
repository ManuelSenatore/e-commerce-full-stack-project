import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import ModalQuantityComponent from "./ModalQuantityComponent";
import ProdottoOrdineCard from "./ProdottoOrdineCard";

const OrderCard = (props) => {
  const [dialogFlag, setDialogFlag] = useState(false);

  const handleClickOpen = () => {
    setDialogFlag(true);
  };

  const handleClose = () => {
    setDialogFlag(false);
  };
  return (
    <Col className="mb-3" xs={12}>
      <ModalQuantityComponent
        dialogFlag={dialogFlag}
        handleClose={handleClose}
        prodotto={props.order}
      />
      <Card
        className="cardProdotto cardCarrello d-flex flex-row align-items-center"
        key={props.i}
        style={{ maxWidth: "60rem" }}
      >
        <div style={{ width: "10rem" }}>
          <Card.Img
            onClick={() => {
              setDialogFlag(true);
            }}
            style={{ cursor: "pointer" }}
            variant="top"
            src={props.order.cartItems[0].prodotto.immagineUrl}
          />
        </div>
        <Card.Body>
          <Card.Title>
            Prodotti ordinati: {props.order.cartItems.length}
          </Card.Title>
          <Card.Text
            onClick={() => {
              setDialogFlag(true);
            }}
            style={{ cursor: "pointer", color: 'blue' }}
            className="text-start"
          >
            Clicca per visualizzare tutti i prodotti
          </Card.Text>
          <Card.Text className="text-end" style={{ fontWeight: "bolder" }}>
            Prezzo totale:
            {props.order.totalCost.toString().split(".")[0]},
            {props.order.totalCost.toString().split(".")[1]
              ? props.order.totalCost.toString().split(".")[1].slice(0, 2)
                  .length === 1
                ? props.order.totalCost.toString().split(".")[1].slice(0, 2) +
                  "0"
                : props.order.totalCost.toString().split(".")[1].slice(0, 2) +
                  ""
              : "00"}{" "}
            €
          </Card.Text>
          {props.order.cartItems.map((prodotto, i) => {
            <ProdottoOrdineCard prodotto={prodotto} key={i} />;
          })}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OrderCard;
