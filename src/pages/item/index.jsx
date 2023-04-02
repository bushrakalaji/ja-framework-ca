import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { API_URL } from "../../shared/urls";
import { useCart } from "../../hooks/useCart";
import * as S from "./index.style";

export function Post() {
  const [product, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  const { addToCart } = useCart();
  function onAddToCartButtonClick() {
    addToCart(id);
  }

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(`${API_URL}/${id}`);
        const json = await response.json();

        setData(json);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    getData(`${API_URL}/${id}`);
  }, [id]);

  if (isLoading || !product) {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <div className="d-flex container flex-wrap gap-3 mt-3">
        <S.ProductImage className="border border-2">
          {" "}
          <img
            src={product.imageUrl}
            alt={product.description}
            className="img-fluid"
          />
        </S.ProductImage>
        <div className="d-flex flex-column align-items-start ">
          <h1>{product.title}</h1>
          <p>{product.description}</p>{" "}
          <Button variant="outline-primary" onClick={onAddToCartButtonClick}>
            Add to cart
          </Button>
        </div>
      </div>
      <section className="container d-flex flex-column flex-wrap gap-3">
        <h2 className="mt-3">Reviews</h2>
        {product.reviews.length === 0 ? (
          <div>No reviews yet</div>
        ) : (
          product.reviews.map((review) => (
            <div
              key={review.id}
              className="h4 pb-2 mb-4 border-bottom border-ligth"
            >
              <h3>
                {review.username} : {review.description}
              </h3>
              <h3>Rating : {review.rating}</h3>
            </div>
          ))
        )}
      </section>
    </>
  );
}
