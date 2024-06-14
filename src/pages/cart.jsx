import React from "react";
import { Button, ListGroup, Container } from "react-bootstrap";
import "./cart.css";

function Cart({ items, removeFromCart, clearCart }) {
  const handlePurchase = () => {
    alert("Zakupiono!");
    clearCart(); // Clear the cart after a successful purchase
  };

  // Oblicz całkowitą cenę
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <Container className="cart-container">
      <h2 className="text-center text-shadow">Koszyk</h2>
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
          <p className="text-center text-shadow">Koszyk jest pusty</p>
        )}
      </ListGroup>
      {items.length > 0 && (
        <>
          <div className="total-price text-center text-shadow mt-3">
            <h4>Całkowita cena: {totalPrice} zł</h4>
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" size="lg" onClick={handlePurchase}>
              Zakup
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;
