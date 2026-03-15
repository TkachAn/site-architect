import { About } from "./pages/about_us/about.jsx";
import { Contacts } from "./pages/contacts.jsx";
import { Home } from "./pages/home.jsx";
import { NotFound } from "./pages/notfound/notFound.jsx";
import { ErrorsPage } from "./pages/errors.jsx";
import { RegPage } from "./pages/registration.jsx";
import { AuthPage } from "./pages/authorization.jsx";
import { Cabinet } from "./pages/cabinet.jsx";
import { InputsPage } from "./pages/inputs/inputsPage.jsx";
import { StructPage } from "./pages/struct/strPage.jsx";

export const routes = [
  {
    path: "/",
    element: <Home />,
    title: "Главная",
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
    path: "/cabinet",
    element: <Cabinet />,
    title: "Личный кабинет",
    showInMenu: false,
  },
  {
    path: "/structure",
    element: <StructPage />,
    title: "Структура страницы",
    showInMenu: false,
  },
  {
    path: "/inputs",
    element: <InputsPage/>,
    title: "Компоненты ввода",
    showInMenu: false,
  },
  {
    path: "/buttons",
    element: <RegPage />,
    title: "Кнопки",
    showInMenu: false,
  },
  {
    path: "/dialogs",
    element: <RegPage />,
    title: "Диалоговые окна",
    showInMenu: false,
  },
  {
    path: "/forms",
    element: <RegPage />,
    title: "Формы",
    showInMenu: false,
  },
  {
    path: "/auth",
    element: <AuthPage />,
    title: "Регистрация и авторизация",
    showInMenu: false,
  },
  {
    path: "/menu",
    element: <RegPage />,
    title: "Автогенерация меню страницы",
    showInMenu: false,
  },
  {
    path: "/pages",
    element: <RegPage />,
    title: "Примеры страниц",
    showInMenu: false,
  },
  {
    path: "/Registration",
    element: <RegPage />,
    title: "Регистрация",
    showInMenu: false,
  },
  {
    path: "/Autorization",
    element: <AuthPage />,
    title: "Авторизация",
    showInMenu: false,
  },
  {
    path: "/error/:statusCode",
    element: <ErrorsPage />,
    title: "Ошибка",
    showInMenu: false,
  },
  {
    path: "*",
    element: <NotFound />,
    title: "404",
    showInMenu: false,
  },
];


/*

  {
    path: "/error/:statusCode",
    element: <Errors />, 
    title: "Ошибка",
    showInMenu: false,
  },
*/