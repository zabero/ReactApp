import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home = () => {
  return (
    <Container className="custom-margin-top">
      <Row>
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            className="rounded-circle img-fluid" // img-fluid zapewnia responsywność obrazu
            src="https://sabaisabai.pl/wp-content/uploads/2023/02/Lee-recepcja2-v1-400x400.webp"
            alt="Lee"
          />
        </Col>
        <Col md={8}>
          <h2 className="py-4 text-center">
            Mam na imię Lee i od 20 lat zajmuję się masażami tajskimi.
          </h2>
          <p>
            Doświadczenie zbierałam w najlepszych szkołach masażu i SPA w
            Tajlandii i na świecie. Od 9 lat żyję i pracuję w Polsce. Teraz
            odważyłam się założyć własny salon, w którym chętnie pokaże Państwu,
            jak niesamowity może być masaż tajski.
          </p>
          <p className="text-center fs-1">Zapraszam!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
