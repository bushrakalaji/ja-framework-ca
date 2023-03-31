import React from "react";
import { Button, Card } from "react-bootstrap";
import * as S from "./index.style";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

function Product({
  product: {
    title,
    description,
    price,
    discountedPrice,
    id,
    imageUrl,
    rating,
    reviews,
  },
}) {
  return (
    <Card style={{ width: "15rem" }}>
      <div style={{ marginTop: "10px", height: "200px" }}>
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{
            marginTop: "10px",
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <S.PriceComponent>
          <S.Price isValid={price === discountedPrice}>{price}</S.Price>
          <div>{discountedPrice < price && discountedPrice}</div>
        </S.PriceComponent>
        <LinkContainer to={`/post/${id}`}>
          <Button variant="outline-primary">view</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}

export default Product;
