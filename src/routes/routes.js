import Cadastrar from "../pages/cadastrar";
import Editar from "../pages/editar";
import Home from "../pages/home";
import Sobre from "../pages/sobre";
import Visualizar from "../pages/visualizar";

// TODO: Modificar rotas para aplicação
export const PATHS = {
  HOME: "/",
  CADASTRAR: "/cadastrar",
  VISUALIZAR: "/livros/:id",
  EDITAR: "/livros/:id/editar",
  SOBRE: "/sobre",
};

const ROUTES = [
  {
    name: "Home",
    path: PATHS.HOME,
    element: Home,
  },
  {
    name: "Cadastrar",
    path: PATHS.CADASTRAR,
    element: Cadastrar,
  },
  {
    name: "Visualizar",
    path: PATHS.VISUALIZAR,
    element: Visualizar,
  },
  {
    name: "Editar",
    path: PATHS.EDITAR,
    element: Editar,
  },
  {
    name: "Sobre",
    path: PATHS.SOBRE,
    element: Sobre,
  },
];

export default ROUTES;
