/* eslint-disable react/prop-types */
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./menu.css";
import { Translations } from "../../const/menuconst";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Menu({ cartItems }) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar-fixed-top">
        <Container fluid className="justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto justify-content-center align-items-center">
              <Navbar.Brand>SabaiSabai</Navbar.Brand>
              <Nav.Link as={Link} to={"/"}>
                O nas
              </Nav.Link>
              <NavDropdown title="Usługi" id="basic-nav-dropdown">
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
                Galeria
              </Nav.Link>
              <Nav.Link as={Link} to={"/vouchery"}>
                Sklep
              </Nav.Link>
              <Nav.Link as={Link} to={"/booking"}>
                Umów wizytę
              </Nav.Link>
              <Nav.Link as={Link} to={"/kontakt"}>
                Kontakt
              </Nav.Link>
              <Nav.Link as={Link} to={"/koszyk"}>
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">{cartItems.length}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
