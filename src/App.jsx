import React from "react";
import ProductsList from "./components/productList";
import { Layout } from "./components/layout";
import { Route, Routes } from "react-router-dom";
import { Post } from "./pages/item";
import CartList from "./pages/checkout";
import { HomePage } from "./pages/home";
import { CheckoutSuccess } from "./pages/success";
import ContactForm from "./pages/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="post/:id" element={<Post />} />
          <Route path="checkout" element={<CartList />} />
          <Route path="success" element={<CheckoutSuccess />} />
          <Route path="contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
