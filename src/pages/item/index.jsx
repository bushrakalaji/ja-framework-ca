import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { Button, Card, Container, Row, Col, CardGroup } from "react-bootstrap";

import { API_URL } from "../../shared/urls";
import { useCart } from "../../hooks/useCart";

export function Post() {
  const [product, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  const { addToCart } = useCart();
  function onAddToCartButtonClick() {
    addToCart(id);
  }
  console.log(product);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(`${API_URL}/${id}`);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`${API_URL}/${id}`);
  }, [id]);

  if (isLoading || !product) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log("ghgjg");

  return (
    <>
      <div>{product.title}</div>
      <Button variant="outline-primary" onClick={onAddToCartButtonClick}>
        Add to cart
      </Button>
    </>
  );
}
