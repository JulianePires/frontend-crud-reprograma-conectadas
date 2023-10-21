import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import ROUTES from "./routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />}/>
        ))}
      </Routes>
      <Header />
    </BrowserRouter>
  );
};
