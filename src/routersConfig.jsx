import { About } from "./pages/about.jsx";
import { Contacts } from "./pages/contacts.jsx";
import { Home } from "./pages/home.jsx";
import { Lab } from "./pages/lab.jsx";
import { Lab2 } from "./pages/lab2.jsx";
import { NotFound } from "./pages/notfound/notFound.jsx";


export const routes = [
  {
    path: "/",
    element: <Home />,
    title: "Главная",
    showInMenu: true,
  },
  {
    path: "/Lab",
    element: <Lab />,
    title: "Личный кабинет",
    showInMenu: true,
  },
  {
    path: "/lab2",
    element: <Lab2 />,
    title: "Лабораторная 2",
    showInMenu: true,
  },
  {
    path: "/contacts",
    element: <Contacts />,
    title: "Контакты",
    showInMenu: true,
  },
  {
    path: "/about",
    element: <About />,
    title: "О нас",
    showInMenu: true,
  },
  {
    path: "*",
    element: <NotFound />,
    title: "404",
    showInMenu: false,
  },
];
