import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./menu.css";
import { Translations } from "../../const/menuconst";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../assets/galeria/SabaiSabai.png"; // Importuj obrazek

const translations = {
  pl: {
    about: "O nas",
    services: "Usługi",
    gallery: "Galeria",
    shop: "Sklep",
    bookAppointment: "Umów wizytę",
    contact: "Kontakt",
    cart: "Koszyk",
  },
  en: {
    about: "About Us",
    services: "Services",
    gallery: "Gallery",
    shop: "Shop",
    bookAppointment: "Book Appointment",
    contact: "Contact",
    cart: "Cart",
  },
};

function Menu({ cartItems }) {
  const [language, setLanguage] = useState("pl");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary navbar-fixed-top text-shadow"
      >
        <Container fluid className="justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto justify-content-center align-items-center text-shadow">
              <Navbar.Brand>SabaiSabai</Navbar.Brand>
              <Nav.Link as={Link} to={"/"}>
                {translations[language].about}
              </Nav.Link>
              <NavDropdown
                title={translations[language].services}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to={"/klasyczny"}>
                  {Translations.m1}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/olejkowy"}>
                  Masaż Olejkowy
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/plecow"}>
                  Masaż Pleców ramion i głowy
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/stopy"}>
                  Masaż tajski stóp (refleksologia)
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/kokos"}>
                  Masaż gorącym olejkiem kokosowym
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/stemple"}>
                  Masaż stemplami ziołowymi
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/kobido"}>
                  Masaż Kobido
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/paradise"}>
                  Masaż SabaiSabai Paradise
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/booking"}>
                  Umów usługę
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/galeria"}>
                {translations[language].gallery}
              </Nav.Link>
              <Nav.Link as={Link} to={"/vouchery"}>
                {translations[language].shop}
              </Nav.Link>
              <Nav.Link as={Link} to={"/booking"}>
                {translations[language].bookAppointment}
              </Nav.Link>
              <Nav.Link as={Link} to={"/kontakt"}>
                {translations[language].contact}
              </Nav.Link>
              <Nav.Link as={Link} to={"/koszyk"}>
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">{cartItems.length}</span>
              </Nav.Link>
              <div className="language-switcher">
                <img
                  src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg`}
                  alt="Polish"
                  className={`flag ${language === "pl" ? "active" : ""}`}
                  onClick={() => handleLanguageChange("pl")}
                />
                <img
                  src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg`}
                  alt="English"
                  className={`flag ${language === "en" ? "active" : ""}`}
                  onClick={() => handleLanguageChange("en")}
                />
              </div>
              <img src={logo} alt="SabaiSabai Logo" className="logo" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
