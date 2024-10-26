import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Register = () => {
  const url = import.meta.env.VITE_BK_URL;
  const port = import.meta.env.VITE_PORT;
  const uri = `http://${url}:${port}/api/v1/user/patient/register`;

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [uid, setUid] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${uri}`,
        {
          firstName,
          lastName,
          email,
          phone,
          uid,
          gender,
          password,
          confirmPassword,
          role: "Patient",
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        },
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="form-component register-form container">
      <h2>Sign Up</h2>
      <p>Please Sign Up to Continue</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        aspernatur tenetur, tempora quis rem enim!
      </p>
      <form onSubmit={handleRegister}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="number"
            placeholder="UID"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          ></input>
          <input
            type="date"
            placeholder="Date Of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          ></input>
        </div>
        <div>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div
          style={{
            gap: "10px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <p style={{ marginBottom: 0 }}>Already Registered?</p>
          <Link
            to={"/register"}
            style={{ textDecoration: "none", alignItems: "center" }}
          >
            Register Now
          </Link>
        </div>
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
