import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../pages/kontakt.css";

export const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_umd8d8j",
        "template_3vda0k7",
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
      <Container style={{ maxWidth: "1200px" }}>
        <Row className="justify-content-md-center">
          <Col md={12} className="form-wrapper">
            <h2 className="text-center">Kontakt</h2>
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
                  style={{ width: "100%" }} /* Dodano szerokość 100% */
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
                  style={{ width: "100%" }} /* Dodano szerokość 100% */
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Wiadomość</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Treść Wiadomości"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ width: "100%" }} /* Dodano szerokość 100% */
                />
              </Form.Group>
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
