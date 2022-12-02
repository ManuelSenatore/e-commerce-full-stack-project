import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCarrelloList } from "../redux/actions/actions";

const CarrelloCard = (props) => {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.user.token);
  const dispatch = useDispatch();

  const removeToCarrello = async (elementoId) => {
    const baseEndpoint = `http://localhost:8080/api/carrello/delete/${elementoId}/${user.id}`;

    const header = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await fetch(baseEndpoint, {
        method: "DELETE",
        headers: header,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(getCarrelloList(token, user.id));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Col xs={6} sm={6} md={4}>
      <Card
        className="cardProdotto"
        key={props.i}
        style={{ border: "none", width: 100 + "%" }}
      >
        <MdDeleteForever
          onClick={() => {
            removeToCarrello(props.elemento.id);
            console.log(props.elemento.id);
          }}
          className="favoriteIcon"
          style={{cursor: "pointer"}}
        />
        <Card.Img variant="top" src={props.elemento.prodotto.immagineUrl} />
        <Card.Body className="text-center cardButton">
          <Card.Title className="mt-2">
            {props.elemento.prodotto.nome.substring(0, 20) + "..."}
          </Card.Title>
          <Card.Text style={{ color: "green", fontWeight: "bolder" }}>
            {props.elemento.prodotto.prezzo.toString().split(".")[0]},
            {props.elemento.prodotto.prezzo.toString().split(".")[1]
              ? props.elemento.prodotto.prezzo.toString().split(".")[1].slice(0, 2)
                  .length === 1
                ? props.elemento.prodotto.prezzo.toString().split(".")[1].slice(0, 2) +
                  "0"
                : props.elemento.prodotto.prezzo.toString().split(".")[1].slice(0, 2) +
                  ""
              : "00"}{" "}
            €
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CarrelloCard;
