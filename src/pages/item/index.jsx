import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { API_URL } from "../../shared/urls";
import { useCart } from "../../hooks/useCart";

export function Post() {
  const [product, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();
  console.log(product);
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
  return (
    <>
      <h1>{product.title}</h1>
      <div>
        <img src={product.imageUrl} alt={product.description} />
        <p>{product.description}</p>
      </div>
      <section>
        <h2>Reviews</h2>
        {product.reviews.map((review) => (
          <div key={review.id}>
            <h3>
              {review.username} : {review.description}
            </h3>
            <h3>Rating : {review.rating}</h3>
          </div>
        ))}
      </section>
      <Button variant="outline-primary" onClick={onAddToCartButtonClick}>
        Add to cart
      </Button>
    </>
  );
}
