import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function CheckoutSuccess() {
  return (
    <div className="container">
      <h1 className="fs-3">
        Success! Your transaction has been completed, and you'll soon receive
        your amazing products.
      </h1>

      <LinkContainer to="/">
        <Button className="btn">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>{" "}
          Back to Home page
        </Button>
      </LinkContainer>
    </div>
  );
}
