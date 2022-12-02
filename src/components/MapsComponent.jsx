import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const MapsComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_MAP_API_KEY,
  });

  if (!isLoaded) return <Spinner />;
  return (
    <Container fluid>
      <Row
        className="d-flex justify-content-evenly"
        style={{ backgroundColor: "red" }}
      >
        <Col className="p-0" lg={6} md={6} xs={12}>
          <Map />
        </Col>
        <Col
          className=" d-flex flex-column justify-content-center align-items-center p-0"
          lg={6}
          md={6} 
          xs={12}
        >
          <h2 className="text-center p-2" style={{ color: "white" }}>
            VIENI A TROVARCI !
          </h2>
          <h6 className="text-center p-1" style={{ color: "white" }}>
            Siamo a via Clemente Tafuri 5 Cava De Tirreni SA
          </h6>
        </Col>
      </Row>
    </Container>
  );
};
function Map() {
  const center = useMemo(() => ({ lat: 40.7067704, lng: 14.7015501 }), []);
  return (
    <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
      <Marker position={center} title="Cartoleria Papyrus" />
    </GoogleMap>
  );
}

export default MapsComponent;
