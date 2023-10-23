import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTES from "./routes";
import Footer from "../components/Footer.jsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
      <Footer content="Desenvolvido por alunas Frontend e Backend"></Footer>
    </BrowserRouter>
  );
};
