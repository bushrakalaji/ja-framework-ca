import React, { useEffect } from "react";
import { API_URL } from "../../shared/urls";
import { useCart } from "../../hooks/useCart";
import Product from "../product/index";
import { Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductsList() {
  const { products, fetchProducts, isLoading, hasError } = useCart();

  useEffect(() => {
    fetchProducts(API_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>There was an error fetching the products.</p>;
  }
  console.log(products);
  // return <div>debug me </div>;
  return (
    <Container>
      <Row
        xs={1}
        md={2}
        className="g-4"
        style={{ gap: "1rem", marginTop: "20px" }}
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
}

export default ProductsList;
