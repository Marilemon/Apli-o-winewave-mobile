import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MenuVertical1 from "./pages/MenuVertical1";
import Participantes from "./pages/Participantes";
import Carrossel from "./pages/Carrossel";
import Catalogo from "./pages/Catalogo";
import Carrinho from "./pages/Carrinho";
import Filtros from "./pages/Filtros";
import CnfirmaoDeIdade from "./pages/CnfirmaoDeIdade";
import Login from "./pages/Login";
import Participantes1 from "./pages/Participantes1";
import Carrossel1 from "./pages/Carrossel1";
import Catalogo1 from "./pages/Catalogo1";
import Carrinho1 from "./pages/Carrinho1";
import Filtros1 from "./pages/Filtros1";
import CnfirmaoDeIdade1 from "./pages/CnfirmaoDeIdade1";
import Login1 from "./pages/Login1";

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
      case "/participantes1":
        title = "";
        metaDescription = "";
        break;
      case "/carrossel":
        title = "";
        metaDescription = "";
        break;
      case "/catalogo1":
        title = "";
        metaDescription = "";
        break;
      case "/carrinho1":
        title = "";
        metaDescription = "";
        break;
      case "/filtros":
        title = "";
        metaDescription = "";
        break;
      case "/cnfirmao-de-idade":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/participantes":
        title = "";
        metaDescription = "";
        break;
      case "/carrossel1":
        title = "";
        metaDescription = "";
        break;
      case "/catalogo":
        title = "";
        metaDescription = "";
        break;
      case "/carrinho":
        title = "";
        metaDescription = "";
        break;
      case "/filtros1":
        title = "";
        metaDescription = "";
        break;
      case "/cnfirmao-de-idade1":
        title = "";
        metaDescription = "";
        break;
      case "/login1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MenuVertical1 />} />
      <Route path="/participantes1" element={<Participantes />} />
      <Route path="/carrossel" element={<Carrossel />} />
      <Route path="/catalogo1" element={<Catalogo />} />
      <Route path="/carrinho1" element={<Carrinho />} />
      <Route path="/filtros" element={<Filtros />} />
      <Route path="/cnfirmao-de-idade" element={<CnfirmaoDeIdade />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
