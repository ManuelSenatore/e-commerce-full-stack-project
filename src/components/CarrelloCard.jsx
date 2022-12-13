import { Button, Input } from "@mui/material";
import React from "react";
import { Col, Card, InputGroup } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCarrelloList } from "../redux/actions/actions";
import { useState } from "react";
import ModalQuantityComponent from "./ModalQuantityComponent";
import { useEffect } from "react";
import ClearIcon from '@mui/icons-material/Clear';

const CarrelloCard = (props) => {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formObj, setFormObj] = useState({
    quantity: props.elemento.quantity,
  });

  const handleForm = (key, value) => {
    // setta l'oggetto del form
    setFormObj({
      ...formObj,
      [key] : value
    })
  };

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

  const updateQuantity = async (elementoId, formObj) => {
    console.log(formObj);
    const baseEndpoint = `http://localhost:8080/api/carrello/update/${elementoId}`;

    const header = {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await fetch(baseEndpoint, {
        method: "PUT",
        headers: header,
        body: JSON.stringify(formObj),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(getCarrelloList(token, user.id));
      } else {
        console.log("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateQuantity(props.elemento.id, formObj);
  },[formObj.quantity])

  return (
    <Col className="mb-3" xs={12}>
      <Card
        className="cardProdotto cardCarrello d-flex flex-row align-items-center"
        key={props.i}
        style={{ width: 100 + "%" }}
      >
        <div style={{ width: "10rem" }}>
          <Card.Img
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/dettagli" + props.elemento.prodotto.id)}
            variant="top"
            src={props.elemento.prodotto.immagineUrl}
          />
        </div>
        <Card.Body>
          <Card.Title className="mt-2">
            {props.elemento.prodotto.nome}
          </Card.Title>
          <Card.Text className="flex-end" style={{ fontWeight: "bolder" }}>
            {props.elemento.prodotto.prezzo.toString().split(".")[0]},
            {props.elemento.prodotto.prezzo.toString().split(".")[1]
              ? props.elemento.prodotto.prezzo
                  .toString()
                  .split(".")[1]
                  .slice(0, 2).length === 1
                ? props.elemento.prodotto.prezzo
                    .toString()
                    .split(".")[1]
                    .slice(0, 2) + "0"
                : props.elemento.prodotto.prezzo
                    .toString()
                    .split(".")[1]
                    .slice(0, 2) + ""
              : "00"}{" "}
            €
          </Card.Text>
          <div className="form-sm" data-form-parent="">
            <div class="input-group">
              <Button
                onClick={() => {
                  handleForm("quantity", formObj.quantity - 1);
                
                }}
                disabled={props.elemento.quantity === 1 ? true : false}
              >
                -
              </Button>
              <span>{formObj.quantity}</span>
              <Button
                onClick={() => {
                  handleForm("quantity", props.elemento.quantity + 1);

                }}
              >
                +
              </Button>
            </div>
            <small className="invalid-feedback"></small>
          </div>
        </Card.Body>
        <ClearIcon
          className="align-self-start"
          onClick={() => {
            removeToCarrello(props.elemento.id);
            console.log(props.elemento.id);
          }}
          style={{ cursor: "pointer", color: "red" }}
        />
      </Card>
    </Col>
  );
};

export default CarrelloCard;
