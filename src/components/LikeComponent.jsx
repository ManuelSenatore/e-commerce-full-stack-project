import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { getPreferitiList } from "../redux/actions/actions";
import { useLocation } from "react-router-dom";
const LikeComponent = (props) => {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.user.token);
  const preferitiList = useSelector((state) => state.preferiti.preferitiList);
  const dispatch = useDispatch();
  const location = useLocation();
  const addToFavorite = async (prodottoId) => {
    const baseEndpoint = "http://localhost:8080/api/preferiti/aggiungi";

    const header = {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const body = {
      userId: user.id,
      prodottoId: prodottoId,
    };

    try {
      const response = await fetch(baseEndpoint, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(getPreferitiList(token, user.id));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeToFavorite = async (prodottoId) => {
    const baseEndpoint = `http://localhost:8080/api/preferiti/delete/prodotto/${prodottoId}/${user.id}`;

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
        dispatch(getPreferitiList(token, user.id));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <FavoriteIcon style={{cursor: "pointer", fontSize: "2rem"}}
        color={
          preferitiList.some((el) => el.id === props.prodotto.id) ? "error" : ""
        }
        onClick={() => {
            console.log(preferitiList.find((el) => el.id === props.prodotto.id));
          if (preferitiList.some((el) => el.id === props.prodotto.id)) {
            removeToFavorite(
              preferitiList.find((el) => el.id === props.prodotto.id).id           
            );
          } else {
            addToFavorite(props.prodotto.id);
          }
        }}
        className= "favoriteIcon"

      />
    </>
  );
};

export default LikeComponent;
