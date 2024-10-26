import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { React, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import { Context } from "./main";

import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const backendUrl = import.meta.env.VITE_BK_URL;
  const port = import.meta.env.VITE_PORT;
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}${port}/api/v1/user/patient/me`,
          // `http://"localhost:4000/api/v1/user/patient/me`,
          { withCredentials: true },
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, []);
  return (
    <div className={`no-scrollbar ${darkMode ? "dark" : ""} `}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />

        <ToastContainer position="top-center" />
        <button
          className="fixed bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black border-opacity-20 bg-gray-400 bg-opacity-10 text-3xl text-black shadow-lg outline-none backdrop-blur-md backdrop-filter dark:bg-black dark:bg-opacity-60 dark:text-white"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <IoMdMoon className="absolute bottom-[1.15rem] right-[1.1rem] text-2xl" />
          ) : (
            <IoMdSunny className="absolute bottom-[0.95rem] right-[0.9rem] text-3xl" />
          )}
        </button>
      </Router>
    </div>
  );
};
export default App;
