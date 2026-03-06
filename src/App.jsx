import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routersConfig"; // Твой конфиг
import "./globCSS/debag.css";
import "./globCSS/vars.css";

function App() {
  return (
    
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    
  );
}

export default App;
