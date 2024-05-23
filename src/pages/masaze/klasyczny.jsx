import React from "react";
import { Card } from "react-bootstrap";
import massageImage from "../../assets/klasyczny.jpg";
export const Masaze_klasyczny = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={massageImage} />
        <Card.Body>
          <Card.Title>Klasyczny Tajski Masaż</Card.Title>
          <Card.Text>
            Klasyczny tajski masaż jest znaną formą terapii, która pomaga
            redukować stres, poprawiać cyrkulację oraz zwiększać elastyczność.
            Techniki stosowane w tym masażu łączą elementy akupresury i jogi, co
            sprawia, że jest to unikalne doświadczenie relaksacyjne.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
