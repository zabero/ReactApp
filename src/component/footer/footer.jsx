import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          {/* Informacyjne kolumny */}
          <Col xs={12} md={3}>
            <div className="footer-title">SabaiSabai</div>
            <p className="footer-text">
              Zanurz się z nami w krainie relaksu i rozkoszy dzięki orientalnym
              masażom, których prozdrowotne właściwości znane są od ponad 2000
              lat.
            </p>
          </Col>
          <Col xs={12} md={2}>
            <div className="footer-title">Oferta</div>
            <div className="footer-link">Masaże</div>
            <div className="footer-link">Zabiegi</div>
            <div className="footer-link">Vouchery</div>
          </Col>
          <Col xs={12} md={2}>
            <div className="footer-title">Kontakt</div>
            <div className="footer-link">Współpraca</div>
            <div className="footer-link">Newsletter</div>
            <div className="footer-link">Kontakt</div>
          </Col>
          <Col xs={12} md={2}>
            <div className="footer-title">Regulaminy</div>
            <div className="footer-link">Regulamin usług</div>
            <div className="footer-link">Polityka prywatności</div>
            <div className="footer-link">FAQ</div>
          </Col>
          {/* Sekcja mapy */}
          <Col xs={12} md={3} className="map-container">
            <iframe
              className="map-iframe"
              title="Google Map to Lektykarska 44, Warsaw"
              src="https://maps.google.com/maps?t=m&amp;output=embed&amp;iwloc=near&amp;z=17&amp;q=Lektykarska+44%2C+01-687%2C+Warszawa%2C+Bielany"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
