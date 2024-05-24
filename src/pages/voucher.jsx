import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "./voucher.css";

import image1 from "../assets/galeria/image1.jpg";
import image2 from "../assets/galeria/image2.jpg";
import image3 from "../assets/galeria/image3.jpg";

const massages = [
  {
    id: 1,
    name: "Masaż klasyczny Tajski",
    image: image1,
    description:
      "Relaksujący masaż klasyczny, który pomaga złagodzić napięcie mięśniowe i poprawić krążenie.",
    benefits: [
      "Redukcja stresu",
      "Poprawa krążenia",
      "Złagodzenie napięcia mięśniowego",
      "Zwiększenie elastyczności",
      "Wzmocnienie układu odpornościowego",
    ],
    prices: {
      60: 130,
      90: 170,
      120: 220,
    },
  },
  {
    id: 2,
    name: "Masaż olejkami aromatycznymi",
    image: image2,
    description:
      "Masaż z użyciem olejków aromatycznych, który przynosi głęboki relaks i odnowę.",
    benefits: [
      "Głęboki relaks",
      "Poprawa nastroju",
      "Nawilżenie skóry",
      "Łagodzenie bólu głowy",
      "Detoksykacja organizmu",
    ],
    prices: {
      60: 180,
      90: 230,
      120: 280,
    },
  },
  {
    id: 3,
    name: "Masaż stóp i nóg (refleksologia)",
    image: image3,
    description:
      "Refleksologia to masaż stóp, który stymuluje punkty refleksyjne i poprawia zdrowie całego ciała.",
    benefits: [
      "Złagodzenie bólu stóp",
      "Redukcja napięcia",
      "Poprawa krążenia",
      "Stymulacja punktów refleksyjnych",
      "Poprawa zdrowia całego ciała",
    ],
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
      <div className="header">
        <h2>
          Czy szukasz idealnego prezentu dla bliskiej osoby lub po prostu chcesz
          podarować sobie chwile relaksu? Nasz voucher na masaż to doskonały
          wybór!
        </h2>
      </div>
      <Form className="content">
        <div className="description">
          {selectedMassage && (
            <>
              <img
                className="image"
                src={selectedMassage.image}
                alt={selectedMassage.name}
              />
              <h3>{selectedMassage.name}</h3>
              <p>{selectedMassage.description}</p>
            </>
          )}
        </div>
        <div className="benefits">
          {selectedMassage && (
            <div className="benefits-section">
              <h4>Zalety masażu:</h4>
              <ul>
                {selectedMassage.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="selection">
            <Form.Group controlId="massageSelect">
              <Form.Label>Wybierz masaż</Form.Label>
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
          </div>
          <div className="duration">
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
          </div>
          <div className="add-to-cart">
            <Button variant="primary" onClick={handleAddToCart}>
              Dodaj do koszyka
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Voucher;
