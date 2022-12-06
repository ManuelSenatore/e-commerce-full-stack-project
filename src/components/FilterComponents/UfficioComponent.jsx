import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, Button } from "react-bootstrap";
import ProdottoCard from "../ProdottoCard";
import { getCategoriaList } from "../../redux/actions/actions";
import BackImageComponent from "./BackImageComponent";
import FilterBar from "../FilterBar";

const UfficioComponent = () => {
  const categoriaList = useSelector((state) => state.categoria.categoriaList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriaList("UFFICIO"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BackImageComponent />
      <FilterBar />
      <Container>
        <Row className="display-flex justify-content-beetween">
          {categoriaList.map((prodotto, i) => (
            <ProdottoCard key={i} prodotto={prodotto} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default UfficioComponent
