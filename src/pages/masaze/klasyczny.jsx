import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import massageImage from "../../assets/klasyczny.jpg";
import "./masaze.css"; // Importuj plik CSS

export const Masaze_klasyczny = () => {
  return (
    <Container fluid className="content-container2 mb-3">
      <Row className="justify-content-center align-items-center content-row ">
        <Col md={8}>
          <Card className="massage-card box-shadow">
            <Card.Img variant="top" src={massageImage} />
            <Card.Body>
              <Card.Title className="text-masaze text-shadow fs-2 text-center">
                Klasyczny Tajski Masaż
              </Card.Title>
              <Card.Text className="text-masaze text-shadow">
                Klasyczny tajski masaż jest znaną formą terapii, która pomaga
                redukować stres, poprawiać cyrkulację oraz zwiększać
                elastyczność. Techniki stosowane w tym masażu łączą elementy
                akupresury i jogi, co sprawia, że jest to unikalne doświadczenie
                relaksacyjne.
              </Card.Text>
              <div className="text-masaze text-shadow">
                <strong>Zalety masażu tajskiego klasycznego:</strong>
                <ul>
                  <li>Redukcja stresu i napięcia</li>
                  <li>Poprawa cyrkulacji krwi</li>
                  <li>Zwiększenie elastyczności mięśni</li>
                  <li>Łagodzenie bólu i napięcia mięśniowego</li>
                  <li>Wzmacnianie systemu odpornościowego</li>
                </ul>
              </div>
              <div className="text-masaze text-shadow">
                <strong>Przeciwwskazania:</strong>
                <ul>
                  <li>Ostre stany zapalne</li>
                  <li>Świeże urazy i złamania</li>
                  <li>Choroby skóry</li>
                  <li>Problemy z sercem</li>
                  <li>Zaawansowana ciąża</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
