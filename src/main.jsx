import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      <App />
    </Context.Provider>
  );
};

// Use a variable to store the root instance
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

// Render only once with root.render()
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
);
