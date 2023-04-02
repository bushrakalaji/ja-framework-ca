import React from "react";
import { Button } from "react-bootstrap";
import Product from "../../components/product";
import { useCart } from "../../hooks/useCart";
import { LinkContainer } from "react-router-bootstrap";
import { Container } from "react-bootstrap";

function CartList() {
  const { cart, clearCart, products } = useCart();
  const total = cart.reduce((accumulator, currentId) => {
    const product = products.find((p) => p.id === currentId);
    const price = product.discountedPrice || product.price;
    return accumulator + price;
  }, 0);

  if (cart.length === 0) {
    return (
      <>
        <span>Ooops empty cart</span>{" "}
      </>
    );
  }
  return (
    <Container>
      Cart:{" "}
      {cart.map((id) => {
        const product = products.find(
          (currentProduct) => currentProduct.id === id
        );

        return (
          <div key={product.id}>
            <Product product={product} />
          </div>
        );
      })}{" "}
      <div>Total: ${total.toFixed(2)}</div>
      <LinkContainer to="/success">
        <Button onClick={clearCart}>Checkout</Button>
      </LinkContainer>
    </Container>
  );
}

export default CartList;
