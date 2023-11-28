import React, { useEffect } from "react";
import AppData from "./App.json";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import CnfirmaoDeIdade from "./pages/CnfirmaoDeIdade";
import Filtros from "./pages/Filtros";
import Carrinho from "./pages/Carrinho";
import Catalogo from "./pages/Catalogo";
import Carrossel from "./pages/Carrossel";
import Participantes from "./pages/Participantes";
import MenuVertical from "./pages/MenuVertical";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/cnfirmao-de-idade":
        title = "";
        metaDescription = "";
        break;
      case "/filtros":
        title = "";
        metaDescription = "";
        break;
      case "/carrinho":
        title = "";
        metaDescription = "";
        break;
      case "/catalogo":
        title = "";
        metaDescription = "";
        break;
      case "/carrossel":
        title = "";
        metaDescription = "";
        break;
      case "/participantes":
        title = "";
        metaDescription = "";
        break;
      case "/menu-vertical":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cnfirmao-de-idade" element={<CnfirmaoDeIdade />} />
      <Route path="/filtros" element={<Filtros />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/carrossel" element={<Carrossel />} />
      <Route path="/participantes" element={<Participantes />} />
      <Route path="/menu-vertical" element={<MenuVertical />} />
    </Routes>
  );
}

export default App;
