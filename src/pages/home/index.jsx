import React from "react";
import ProductsList from "../../components/productList";
import AutoCompleteSearchBar from "../../components/search";

export function HomePage() {
  return (
    <div className="d-flex flex-column align-content-between align-items-center">
      <AutoCompleteSearchBar />
      <ProductsList />
    </div>
  );
}
