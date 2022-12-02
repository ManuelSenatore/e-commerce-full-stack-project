import { Button } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarrelloList } from "../redux/actions/actions";
import axios from "axios";

const CheckoutComponent = () => {
  const user = useSelector((state) => state.user.user);
  const carrelloList = useSelector((state) => state.carrello.carrelloList);
  const token = useSelector((state) => state.user.user.token);
  const dispatch = useDispatch();
  let checkoutBodyArray = [];

  for (let i = 0; i < carrelloList.cartItems.length; i++) {
    checkoutBodyArray.push({
      price: carrelloList.cartItems[i].prodotto.prezzo,
      quantity: carrelloList.cartItems[i].quantity,
      productName: carrelloList.cartItems[i].prodotto.nome,
      productId: carrelloList.cartItems[i].prodotto.id,
    });
  }
  console.log(checkoutBodyArray);

  /*     const goToCheckout = async () => {
        const baseEndpoint = `http://localhost:8080/order/create-checkout-session/${user.id}`;
    
        const header = {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const body = {
            checkoutBodyArray
        };
        try {
          const response = await fetch(baseEndpoint, {
            method: "POST",
            headers: header,
            body: JSON.stringify(body),
          });
    
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('sessionId', data.sessionId)
            console.log(data);
          } else {
            alert("Error fetching results");
          }
        } catch (error) {
          console.log(error);
        }
      }; */
  const goToCheckout = () => {
    axios
      .post(
        `http://localhost:8080/order/create-checkout-session`,
        token,
        checkoutBodyArray
      )
      .then((response) => {
        localStorage.setItem("sessionId", response.data.sessionId);
        console.log("session", response.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container className="pageContainer">
      <div className="text-center">
        <h3>Ora verrai reindirizzato alla pagina del pagamento</h3>
        <div className="alert alert-primary">
          Per autorizzare il pagamento usa il numero carta 4242 4242 4242 4242
          con il cvv e la data random
        </div>
        <Button onClick={() => goToCheckout()}>Vai al pagamento</Button>
      </div>
    </Container>
  );
};

export default CheckoutComponent;
