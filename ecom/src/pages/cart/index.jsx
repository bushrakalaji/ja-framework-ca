import React from "react";
import { Button } from "react-bootstrap";
import Product from "../../components/product";
import { useCart } from "../../hooks/useCart";

function CartList() {
  const { cart, clearCart, products } = useCart();
  console.log(cart);
  return (
    <div>
      <Button onClick={clearCart}>ClEAR</Button>
      Cart:{" "}
      {cart.map((id) => {
        const product = products.find(
          (currentProduct) => currentProduct.id === id
        );
        console.log(product);

        return (
          <div>
            <Product product={product} />

            <h1>Hi</h1>
          </div>
        );
      })}
    </div>
  );
}

export default CartList;
