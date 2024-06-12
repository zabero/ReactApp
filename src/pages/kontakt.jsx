import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../pages/kontakt.css";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Imię jest wymagane"),
  email: Yup.string()
    .email("Nieprawidłowy adres email")
    .required("Email jest wymagany"),
  message: Yup.string().required("Wiadomość jest wymagana"),
});

export const Kontakt = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    emailjs
      .send("service_umd8d8j", "template_3vda0k7", values, "eG9foWAeCLSX06aLc")
      .then(
        (result) => {
          console.log(result.text);
          alert("Wiadomość została wysłana!");
          setSubmitting(false);
          resetForm();
        },
        (error) => {
          console.log(error.text);
          alert("Nie udało się wysłać wiadomości. Spróbuj ponownie później.");
          setSubmitting(false);
        }
      );
  };

  return (
    <div className="container-center">
      <Container style={{ maxWidth: "1200px" }}>
        <Row className="justify-content-md-center">
          <Col md={12} className="form-wrapper">
            <h2 className="text-center">Kontakt</h2>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Imię</Form.Label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Podaj swoje imię"
                      as={Form.Control}
                      style={{ width: "100%" }}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Adres Email</Form.Label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Podaj swój adres email"
                      as={Form.Control}
                      style={{ width: "100%" }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Wiadomość</Form.Label>
                    <Field
                      as="textarea"
                      rows={3}
                      name="message"
                      placeholder="Treść Wiadomości"
                      className="custom-textarea"
                      style={{ width: "100%" }}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Wyślij
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
