import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Particles from "./components/Particles";



const App = () => {
  

  return (
    <Container className="m-0">
      <Row>
        <Col style={{ position: "relative" }}>
          <div style={{ position: "absolute" }}>
            <Particles />
          </div>

          <Navbar  />
          
        </Col>
      </Row>
    </Container>
  );
};

export default App;
