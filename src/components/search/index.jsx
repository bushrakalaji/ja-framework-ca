import React, { useState, useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { API_URL } from "../../shared/urls";
import { LinkContainer } from "react-router-bootstrap";
import { Form, ListGroup } from "react-bootstrap";

function AutoCompleteSearchBar() {
  const { products, fetchProducts, isLoading, hasError } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts(API_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProducts]);

  useEffect(() => {
    if (products) {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [products, searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleProductClick = (product) => {
    setSearchQuery(product.title);
    setFilteredProducts([]);
  };

  if (isLoading) {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (hasError) {
    return <p>There was an error fetching the products.</p>;
  }

  return (
    <Form
      style={{ maxWidth: "300px", marginTop: "10px", position: "relative" }}
    >
      <Form.Group controlId="searchQuery">
        <Form.Control
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        {searchQuery && (
          <ListGroup style={{ zIndex: 1000, position: "absolute" }}>
            {filteredProducts.map((product) => (
              <LinkContainer key={product.id} to={`/post/${product.id}`}>
                <ListGroup.Item
                  action
                  onClick={() => handleProductClick(product)}
                >
                  {product.title}
                </ListGroup.Item>
              </LinkContainer>
            ))}
          </ListGroup>
        )}
      </Form.Group>
    </Form>
  );
}

export default AutoCompleteSearchBar;
