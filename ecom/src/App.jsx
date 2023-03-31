import React, { useEffect, useState } from "react";
import ProductsList from "./components/productList";
import { API_URL } from "./shared/urls";
import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { Route, Routes } from "react-router-dom";
import Product from "./components/product";
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
