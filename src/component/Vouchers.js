// components/Vouchers.js
import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const vouchers = [
  { id: 1, name: "Voucher 1", price: "100 PLN" },
  { id: 2, name: "Voucher 2", price: "200 PLN" },
  { id: 3, name: "Voucher 3", price: "300 PLN" },
];

function Vouchers({ addToCart }) {
  return (
    <Container>
      {vouchers.map((voucher) => (
        <Card key={voucher.id} className="mb-3">
          <Card.Body>
            <Card.Title>{voucher.name}</Card.Title>
            <Card.Text>{voucher.price}</Card.Text>
            <Button onClick={() => addToCart(voucher.name)}>
              Dodaj do koszyka
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Vouchers;
