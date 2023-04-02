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
      <Container className="text-center">
        <h1>Shopping cart</h1>
        <div>Ooops empty cart</div>{" "}
        <LinkContainer to="/">
          <Button>Fill your cart now</Button>
        </LinkContainer>
      </Container>
    );
  }
  return (
    <Container className="text-center">
      <div className="d-flex flex-column align-items-center gap-3">
        <h1>Shopping cart</h1>
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
      </div>
      <div className="m-2">Total: {total.toFixed(2)} NOK</div>
      <div className="d-flex gap-3 justify-content-center">
        <LinkContainer to="/success">
          <Button onClick={clearCart}>Checkout</Button>
        </LinkContainer>

        <Button onClick={clearCart}>Clear cart</Button>
      </div>
    </Container>
  );
}

export default CartList;
