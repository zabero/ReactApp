import React from "react";
import { Button, ListGroup, Container } from "react-bootstrap";
import "./cart.css"; // Import the new CSS file

function Cart({ items, removeFromCart, clearCart }) {
  const handlePurchase = () => {
    alert("Zakupiono!");
    clearCart(); // Clear the cart after a successful purchase
  };

  return (
    <Container className="cart-container">
      <h2 className="text-center">Koszyk</h2>
      <ListGroup className="cart-items">
        {items.length > 0 ? (
          items.map((item, index) => (
            <ListGroup.Item key={index} className="cart-item">
              {item.name} - {item.duration} min - {item.price} zł
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(index)}
              >
                Usuń
              </Button>
            </ListGroup.Item>
          ))
        ) : (
          <p>Koszyk jest pusty</p>
        )}
      </ListGroup>
      {items.length > 0 && (
        <div className="d-grid gap-2">
          <Button variant="success" size="lg" onClick={handlePurchase}>
            Zakup
          </Button>
        </div>
      )}
    </Container>
  );
}

export default Cart;
