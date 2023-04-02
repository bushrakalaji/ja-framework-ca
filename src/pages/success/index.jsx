import React from "react";
import { Link } from "react-router-dom";

export function CheckoutSuccess() {
  return (
    <div>
      <h1>Thank you</h1>

      <Link to="/">
        {" "}
        <h2>Go to Home</h2>
      </Link>
    </div>
  );
}
