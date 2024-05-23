// src/pages/cart.jsx
import React, { useState } from "react";
import { Button, Modal, ListGroup } from "react-bootstrap";

function Cart({ items, removeFromCart }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Koszyk ({items.length})
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Twój Koszyk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {items.length > 0 ? (
              items.map((item, index) => (
                <ListGroup.Item key={index}>
                  {item.name} - {item.duration} min
                  <Button
                    variant="danger"
                    size="sm"
                    className="float-right"
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Zamknij
          </Button>
          <Button variant="primary" onClick={() => alert("Zakupiono!")}>
            Zakup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
