import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./booking.css";

const massages = [
  {
    id: 1,
    name: "Masaż Klasyczny Tajski",
    prices: {
      60: 130,
      90: 170,
      120: 220,
    },
  },
  {
    id: 2,
    name: "Masaż Olejkami Aromatycznymi",
    prices: {
      60: 180,
      90: 230,
      120: 280,
    },
  },
  {
    id: 3,
    name: "Masaż stóp i nóg(refleksologia)",
    prices: {
      30: 70,
      60: 130,
    },
  },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Imię jest wymagane"),
  email: Yup.string()
    .email("Nieprawidłowy adres email")
    .required("Email jest wymagany"),
  date: Yup.date().required("Data jest wymagana").nullable(),
  time: Yup.string().required("Godzina jest wymagana"),
  numberOfPeople: Yup.number()
    .required("Liczba osób jest wymagana")
    .positive()
    .integer(),
  massageType: Yup.string().required("Rodzaj masażu jest wymagany"),
  duration: Yup.string().required("Długość masażu jest wymagana"),
});

export const Booking = () => {
  const [selectedMassage, setSelectedMassage] = useState(null);

  const handleMassageChange = (e, setFieldValue) => {
    const selectedId = parseInt(e.target.value);
    const massage = massages.find((m) => m.id === selectedId);
    setSelectedMassage(massage);
    setFieldValue("massageType", massage.name);
    setFieldValue("price", "");
    setFieldValue("duration", "");
  };

  const handleDurationChange = (e, setFieldValue, values) => {
    const duration = e.target.value;
    const price = selectedMassage
      ? selectedMassage.prices[duration] * values.numberOfPeople
      : "";
    setFieldValue("duration", duration);
    setFieldValue("price", price);
  };

  const handleNumberOfPeopleChange = (e, setFieldValue, values) => {
    const numberOfPeople = e.target.value;
    const price = selectedMassage
      ? selectedMassage.prices[values.duration] * numberOfPeople
      : "";
    setFieldValue("numberOfPeople", numberOfPeople);
    setFieldValue("price", price);
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    emailjs
      .send("service_umd8d8j", "template_booking", values, "eG9foWAeCLSX06aLc")
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
    <div className="container-center1">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={12} className="form-wrapper mb-4">
            <h2 className="text-center">Umów Wizytę</h2>
            <Formik
              initialValues={{
                name: "",
                email: "",
                date: null,
                time: "",
                numberOfPeople: "",
                massageType: "",
                duration: "",
                price: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                setFieldValue,
                isSubmitting,
                errors,
                touched,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Imię</Form.Label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Podaj swoje imię"
                      as={Form.Control}
                      isInvalid={touched.name && !!errors.name}
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
                      isInvalid={touched.email && !!errors.email}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label className="me-3">Data</Form.Label>
                    <DatePicker
                      selected={values.date}
                      onChange={(date) => setFieldValue("date", date)}
                      className="form-control"
                      dateFormat="yyyy-MM-dd"
                      isInvalid={touched.date && !!errors.date}
                    />
                    <ErrorMessage
                      name="date"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicTime">
                    <Form.Label>Godzina</Form.Label>
                    <Field
                      type="time"
                      name="time"
                      as={Form.Control}
                      isInvalid={touched.time && !!errors.time}
                    />
                    <ErrorMessage
                      name="time"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicNumberOfPeople"
                  >
                    <Form.Label>Liczba Osób</Form.Label>
                    <Field
                      type="number"
                      name="numberOfPeople"
                      placeholder="Podaj liczbę osób"
                      as={Form.Control}
                      onChange={(e) => {
                        handleChange(e);
                        handleNumberOfPeopleChange(e, setFieldValue, values);
                      }}
                      isInvalid={
                        touched.numberOfPeople && !!errors.numberOfPeople
                      }
                    />
                    <ErrorMessage
                      name="numberOfPeople"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicMassageType">
                    <Form.Label>Rodzaj Masażu</Form.Label>
                    <Field
                      as="select"
                      name="massageType"
                      onChange={(e) => {
                        handleChange(e);
                        handleMassageChange(e, setFieldValue);
                      }}
                      value={values.massageType}
                      className="form-control"
                      isInvalid={touched.massageType && !!errors.massageType}
                    >
                      <option disabled value="">
                        Wybierz rodzaj masażu...
                      </option>
                      {massages.map((massage) => (
                        <option key={massage.id} value={massage.id}>
                          {massage.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="massageType"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                  {selectedMassage && (
                    <Form.Group className="mb-3" controlId="formBasicDuration">
                      <Form.Label>Długość Masażu (minuty)</Form.Label>
                      <Field
                        as="select"
                        name="duration"
                        onChange={(e) => {
                          handleChange(e);
                          handleDurationChange(e, setFieldValue, values);
                        }}
                        value={values.duration}
                        className="form-control"
                        isInvalid={touched.duration && !!errors.duration}
                      >
                        <option disabled value="">
                          Wybierz długość masażu...
                        </option>
                        {Object.keys(selectedMassage.prices).map((key) => (
                          <option key={key} value={key}>
                            {key} minut
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="duration"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                  )}
                  {values.price && (
                    <div className="mb-3 price">
                      <p>Cena: {values.price} zł</p>
                    </div>
                  )}
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

export default Booking;
