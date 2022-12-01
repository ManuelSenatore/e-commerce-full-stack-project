import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProdottoList } from "../redux/actions/actions";
import CarouselComponents from "./CarouselComponents";
import FilterBar from "./FilterBar";
import ProdottoCard from "./ProdottoCard";

const HomeComponent = () => {
  const prodottoList = useSelector((state) => state.prodotto.prodottoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProdottoList());
    console.log(prodottoList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <CarouselComponents />
      <FilterBar />
      <Container>
        <h2 className="text-center">Ultimi Arrivi</h2>
        <Row
          className="display-flex justify-content-beetween"
        >
            {prodottoList.map((prodotto, i) => (
              <ProdottoCard key={i} prodotto={prodotto} />
            ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeComponent;
