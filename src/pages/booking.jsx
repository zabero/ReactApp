import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";
import "./booking.css";

const massages = [
  {
    id: 1,
    name: "Klasyczny",
    prices: {
      60: 130,
      90: 170,
      120: 220,
    },
  },
  {
    id: 2,
    name: "Olejkowy",
    prices: {
      60: 180,
      90: 230,
      120: 280,
    },
  },
  {
    id: 3,
    name: "Stopy",
    prices: {
      30: 70,
      60: 130,
    },
  },
];

export const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: new Date(),
    time: "",
    numberOfPeople: "",
    massageType: "",
    duration: "",
    price: "",
  });

  const [selectedMassage, setSelectedMassage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      date,
    }));
  };

  const handleMassageChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const massage = massages.find((m) => m.id === selectedId);
    setSelectedMassage(massage);
    setFormData((prevState) => ({
      ...prevState,
      massageType: massage.name,
      price: "",
      duration: "",
    }));
  };

  const handleDurationChange = (e) => {
    const duration = e.target.value;
    const price = selectedMassage ? selectedMassage.prices[duration] : "";
    setFormData((prevState) => ({
      ...prevState,
      duration,
      price,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_umd8d8j",
        "template_booking",
        formData,
        "eG9foWAeCLSX06aLc"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Wiadomość została wysłana!");
        },
        (error) => {
          console.log(error.text);
          alert("Nie udało się wysłać wiadomości. Spróbuj ponownie później.");
        }
      );
  };

  return (
    <div className="container-center">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={12} className="form-wrapper">
            <h2 className="text-center">Umów Wizytę</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Imię</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Podaj swoje imię"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adres Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Podaj swój adres email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Data</Form.Label>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  className="form-control"
                  dateFormat="yyyy-MM-dd"
                  name="date"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTime">
                <Form.Label>Godzina</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNumberOfPeople">
                <Form.Label>Liczba Osób</Form.Label>
                <Form.Control
                  type="number"
                  name="numberOfPeople"
                  placeholder="Podaj liczbę osób"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMassageType">
                <Form.Label>Rodzaj Masażu</Form.Label>
                <Form.Control
                  as="select"
                  name="massageType"
                  onChange={handleMassageChange}
                  required
                >
                  <option value="">Wybierz rodzaj masażu...</option>
                  {massages.map((massage) => (
                    <option key={massage.id} value={massage.id}>
                      {massage.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              {selectedMassage && (
                <Form.Group className="mb-3" controlId="formBasicDuration">
                  <Form.Label>Długość Masażu (minuty)</Form.Label>
                  <Form.Control
                    as="select"
                    name="duration"
                    onChange={handleDurationChange}
                    required
                  >
                    <option value="">Wybierz długość masażu...</option>
                    {Object.keys(selectedMassage.prices).map((key) => (
                      <option key={key} value={key}>
                        {key} minut
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              )}
              {formData.price && (
                <div className="mb-3">
                  <strong>Cena: {formData.price} zł</strong>
                </div>
              )}
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Wyślij
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
