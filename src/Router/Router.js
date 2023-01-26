import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercadinho from "../Pages/Mercadinho";
import Carrinho from "../Pages/Carrinho";
import Cadastro from "../Pages/Cadastro";

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mercadinho />} />
        <Route path="/cart" element={<Carrinho />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
