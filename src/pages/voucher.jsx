import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "./voucher.css";

import image1 from "../assets/galeria/image1.jpg";
import image2 from "../assets/galeria/image2.jpg";
import image3 from "../assets/galeria/image3.jpg";
import image4 from "../assets/galeria/Voucher.png";

const massages = [
  {
    id: 1,
    name: "Masaż klasyczny Tajski",
    image: image1,
    description:
      "Relaksujący masaż klasyczny, który pomaga złagodzić napięcie mięśniowe i poprawić krążenie. Masaż tajski klasyczny to tradycyjna metoda masażu, która łączy akupresurę, refleksologię i elementy pasywnej jogi. Podczas sesji masażysta używa dłoni, łokci, kolan i stóp, aby wywierać nacisk na punkty energetyczne ciała. Dzięki temu masaż tajski pomaga uwolnić blokady energetyczne, co przyczynia się do ogólnej poprawy zdrowia i samopoczucia. Regularne sesje masażu tajskiego mogą przynieść wiele korzyści, w tym poprawę elastyczności, redukcję bólu pleców i zwiększenie poziomu energii.",
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
    image: image3,
    description:
      "Masaż z użyciem olejków aromatycznych, który przynosi głęboki relaks i odnowę. Ten rodzaj masażu wykorzystuje mieszankę specjalnie dobranych olejków eterycznych, które mają na celu poprawę stanu fizycznego i emocjonalnego klienta. Masaż olejkami aromatycznymi to nie tylko przyjemność dla ciała, ale również dla zmysłów. Aromaty olejków mogą pomóc w redukcji stresu, poprawie nastroju, a także wspierają zdrowy sen. Masaż ten jest idealny dla osób, które szukają głębokiego relaksu, odnowy ciała i umysłu oraz chcą poprawić wygląd swojej skóry. Regularne stosowanie masażu olejkami może prowadzić do detoksykacji organizmu i ogólnej poprawy zdrowia.",
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
    image: image2,
    description:
      "Refleksologia to masaż stóp, który stymuluje punkty refleksyjne, wpływając pozytywnie na zdrowie całego ciała. Ten rodzaj masażu opiera się na teorii, że różne obszary stóp odpowiadają poszczególnym organom i systemom organizmu. Poprzez precyzyjne uciskanie tych punktów, refleksologia pomaga w redukcji stresu, poprawie krążenia oraz wspomaga naturalne procesy uzdrawiania. Regularne sesje refleksologii mogą przyczynić się do poprawy ogólnego samopoczucia, łagodzenia bólu i zwiększenia energii.",
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
        <h2 className="text-shawow2 rounded-bacground fs-3">
          Czy szukasz idealnego prezentu dla bliskiej osoby lub po prostu chcesz
          podarować sobie chwile relaksu? Nasz voucher na masaż to doskonały
          wybór!
        </h2>
      </div>
      <Form className="content text-shawow2">
        <div className="description rounded-bacground">
          {!selectedMassage && (
            <img className="image" src={image4} alt="Voucher" />
          )}
          {selectedMassage && (
            <>
              <img
                className="image"
                src={selectedMassage.image}
                alt={selectedMassage.name}
              />
              <div className="mt-3">
                <h3>{selectedMassage.name}</h3>
                <p>{selectedMassage.description}</p>
              </div>
            </>
          )}
        </div>
        <div className="benefits description">
          {selectedMassage && (
            <div className="benefits-section text-shawow2 rounded-bacground">
              <h4>Zalety masażu:</h4>
              <ul>
                {selectedMassage.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="selection rounded-bacground">
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
          <div className="duration rounded-bacground">
            <Form.Group controlId="durationSelect">
              <Form.Label>Wybierz długość masażu</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setDuration(e.target.value)}
                disabled={!selectedMassage}
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
          {selectedMassage && duration && (
            <div className="price-section text-shawow2 rounded-bacground mt-3">
              <h4>Cena: {selectedMassage.prices[duration]} zł</h4>
            </div>
          )}
          <div className="add-to-cart">
            <Button
              className="mb-4"
              variant="primary"
              onClick={handleAddToCart}
              disabled={!selectedMassage || !duration}
            >
              Dodaj do koszyka
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Voucher;
