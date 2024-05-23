import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "./voucher.css";

import image1 from "../assets/galeria/image1.jpg";
import image2 from "../assets/galeria/image2.jpg";
import image3 from "../assets/galeria/image3.jpg";

const massages = [
  {
    id: 1,
    name: "Klasyczny",
    image: image1,
    prices: {
      60: 130,
      90: 170,
      120: 220,
    },
  },
  {
    id: 2,
    name: "Olejkowy",
    image: image2,
    prices: {
      60: 180,
      90: 230,
      120: 280,
    },
  },
  {
    id: 3,
    name: "Stopy",
    image: image3,
    prices: {
      30: 70,
      60: 130,
    },
  },
  // Dodaj inne rodzaje masaży tutaj
];

function Voucher({ addToCart }) {
  const [selectedMassage, setSelectedMassage] = useState(null);
  const [duration, setDuration] = useState("");

  const handleAddToCart = () => {
    if (selectedMassage && duration) {
      addToCart({
        name: selectedMassage.name,
        duration,
        price: selectedMassage.prices[duration],
      });
    }
  };

  return (
    <div className="voucher-container">
      <Form>
        <Form.Group controlId="massageSelect">
          <Form.Label>Wybierz rodzaj masażu</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) =>
              setSelectedMassage(
                massages.find((m) => m.id === parseInt(e.target.value))
              )
            }
          >
            <option value="">Wybierz...</option>
            {massages.map((massage) => (
              <option key={massage.id} value={massage.id}>
                {massage.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {selectedMassage && (
          <Card>
            <Card.Img variant="top" src={selectedMassage.image} />
            <Card.Body>
              <Card.Title>{selectedMassage.name}</Card.Title>
              {duration && (
                <Card.Text>
                  Cena: {selectedMassage.prices[duration]} zł
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        )}
        <Form.Group controlId="durationSelect">
          <Form.Label>Wybierz długość masażu</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="">Wybierz...</option>
            {selectedMassage &&
              Object.keys(selectedMassage.prices).map((key) => (
                <option key={key} value={key}>
                  {key} minut
                </option>
              ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleAddToCart}>
          Dodaj do koszyka
        </Button>
      </Form>
    </div>
  );
}

export default Voucher;
