import React, { useEffect, useState } from "react";
import ProductsList from "./components/productList";
import { Layout } from "./components/layout";
import { Route, Routes } from "react-router-dom";

import { Post } from "./pages/item";
import CartList from "./pages/cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsList />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="post/:id" element={<Post />} />
          <Route path="cart" element={<CartList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
