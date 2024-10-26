import { React, useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const url = import.meta.env.VITE_BK_URL;
  const port = import.meta.env.VITE_PORT;
  const uri = `http://${url}:${port}/api/v1/user/login`;

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${uri}`,
        { email, password, confirmPassword, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        },
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/appointment");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (isAuthenticated) {
    return <Navigate to={"/appointment"} />;
  }

  return (
    <div className="box-border flex h-screen justify-center bg-gradient-to-tr from-light-gradient-1 via-light-gradient-2 to-light-gradient-3 pb-10 pt-32 text-gray-600 dark:bg-gradient-to-tl dark:from-dark-gradient-1 dark:via-dark-gradient-2 dark:to-dark-gradient-3 dark:text-gray-600">
      <div className="rounded-xl bg-login-form-bg bg-opacity-10 p-6 shadow-md backdrop-blur-md backdrop-filter dark:bg-login-form-bg-dark">
        <h1 className="flex justify-center pb-5 text-4xl text-input-text-light dark:text-input-text-dark">
          Login
        </h1>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="relative m-7 flex h-16 items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-input-text-light placeholder-input-text-light outline-none focus:border-blue-500 dark:text-input-text-dark dark:placeholder-input-text-dark"
              placeholder="Email"
              required
            />
            <FaUser className="absolute left-3 text-gray-500" />
          </div>

          {/* Password Field */}
          <div className="relative m-7 flex h-16 items-center">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-input-text-light placeholder-input-text-light outline-none focus:border-blue-500 dark:text-input-text-dark dark:placeholder-input-text-dark"
              placeholder="Password"
              required
            />
            <FaLock className="absolute left-3 text-gray-500" />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between px-7">
            <label className="flex items-center text-input-text-light dark:text-input-text-dark">
              <input type="checkbox" className="mr-2 cursor-pointer" />
              Remember me
            </label>
            <a
              href="#"
              className="pl-14 text-input-text-light text-opacity-40 hover:underline dark:text-input-text-dark"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className="w-[85%] rounded-lg bg-login-button-bg-light bg-opacity-60 py-2 text-login-button-text-light transition-colors hover:bg-login-button-hover-bg-light hover:bg-opacity-80 dark:bg-login-button-bg-dark dark:text-login-button-text-dark dark:hover:bg-login-button-hover-bg-dark"
            >
              Login
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-5 flex justify-center">
            <span className="text-input-text-light dark:text-input-text-dark">
              Don't have an account?{" "}
            </span>
            <Link
              to="/register"
              className="ml-4 pl-8 text-input-text-light text-opacity-40 hover:underline dark:text-input-text-dark"
            >
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
