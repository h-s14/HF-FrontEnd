import { React, useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Calendar, ChevronDown } from "lucide-react";
import { Context } from "../main";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [uid, setUid] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState("");

  const navigateTo = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const departmentsArray = [
    "Select Department",
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physio Therapy",
    "Dermatology",
    "ENT",
  ];

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        if (!isAuthenticated) {
          navigateTo("/login");
        }
      } catch (error) {
        navigateTo("/login");
      }
    };

    checkAuthStatus();
  }, [navigateTo]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_SERVER_BASE_URL}/api/v1/user/doctors`,
        { withCredentials: true },
      );
      setDoctors(data.doctors);
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_SERVER_BASE_URL}/api/v1/appointment/post`,
        {
          firstName,
          lastName,
          email,
          phone,
          uid,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          address,
          hasVisited: hasVisitedBool,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log("Form submitted successfully", data);
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Submission failed");
    }
  };
  return (
    <div className="flex justify-center pb-16">
      <div className="box-border flex w-[90%] items-center justify-center px-5 pt-24 text-gray-500 dark:text-gray-400">
        <div className="rounded-lg border-gray-100 bg-gray-600 bg-opacity-10 p-6 shadow-md backdrop-blur-md backdrop-filter dark:bg-gray-800">
          <h1 className="flex justify-center pb-5 text-4xl">
            Book An Appointment
          </h1>
          <form onSubmit={handleAppointment}>
            <div className="flex flex-wrap">
              {/*
               */}
              {/* First Name Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-[90%] md:w-[44%]">
                <input
                  type="text"
                  className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 placeholder-gray-600 outline-none focus:border-blue-500 dark:text-gray-500 dark:placeholder-gray-500"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              {/* Last Name Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-[90%] md:w-[44%]">
                <input
                  type="text"
                  className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 placeholder-gray-600 outline-none focus:border-blue-500 dark:text-gray-500 dark:placeholder-gray-500"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              {/* Email Name Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-[90%] md:w-[44%]">
                <input
                  type="Email"
                  className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 placeholder-gray-600 outline-none focus:border-blue-500 dark:text-gray-500 dark:placeholder-gray-500"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Phone Number Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-[90%] md:w-[44%]">
                <input
                  type="number"
                  className="number-input no-spinner h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 placeholder-gray-600 outline-none focus:border-blue-500 dark:text-gray-500 dark:placeholder-gray-500"
                  placeholder="Phone no."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              {/* UID Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-[90%] md:w-[44%]">
                <input
                  type="number"
                  className="number-input no-spinner h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 placeholder-gray-600 outline-none focus:border-blue-500 dark:text-gray-500 dark:placeholder-gray-500"
                  placeholder="UID"
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                  required
                />
              </div>
              {/* DOB Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-[90%] md:w-[44%]">
                <Calendar className="absolute right-5 cursor-pointer" />
                <span className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 outline-none focus:border-blue-500">
                  <input
                    type="date"
                    id="dob"
                    className="z-10 h-full w-full border-black border-opacity-20 bg-transparent text-gray-600 outline-none focus:border-blue-500"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                    style={{ opacity: 0 }}
                  />
                  <span
                    className={`absolute left-10 top-5 text-gray-500 transition-all duration-200 ease-in-out ${dob ? "visible" : "invisible"}`}
                  >
                    {dob ? new Date(dob).toLocaleDateString() : "Birth Date"}
                  </span>
                </span>
                <label
                  htmlFor="dob"
                  className={`absolute left-10 text-gray-500 ${
                    dob ? "invisible" : "visible"
                  }`}
                >
                  DOB
                </label>
              </div>
              {/* Gender Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-[90%] md:w-[44%]">
                <span className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-4 text-gray-600 outline-none focus:border-blue-500">
                  <select
                    className="z-3 h-full w-full cursor-pointer bg-transparent text-gray-600 outline-none focus:border-blue-500"
                    id="gender-val"
                    value={gender}
                    style={{ opacity: 0 }}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <span
                    className={`absolute left-10 top-5 z-[-5] h-[70%] w-[90%] justify-between bg-transparent text-gray-500 ${gender === "" || (gender !== "Male" && gender !== "Female") ? "visible" : "invisible"} flex`}
                  >
                    Gender
                    <ChevronDown />
                  </span>
                </span>
                <label
                  htmlFor="gender-val"
                  className={`absolute left-10 text-gray-500 ${
                    gender === "" || (gender !== "Male" && gender !== "Female")
                      ? "invisible"
                      : "visible"
                  }`}
                >
                  {gender === "Male"
                    ? "Male"
                    : gender === "Female"
                      ? "Female"
                      : ""}
                </label>
              </div>

              {/* Appointment Date Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-[90%] md:w-[44%]">
                <Calendar className="absolute right-5 cursor-pointer" />
                <span className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 outline-none focus:border-blue-500">
                  <input
                    type="date"
                    id="appointment-date"
                    className="h-full w-full border-black border-opacity-20 bg-transparent text-gray-600 outline-none focus:border-blue-500"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    required
                    style={{ opacity: 0 }}
                  />
                  <span
                    className={`absolute left-10 top-5 text-gray-500 ${appointmentDate ? "visible" : "invisible"}`}
                  >
                    {appointmentDate
                      ? new Date(appointmentDate).toLocaleDateString()
                      : "Appointment Date"}
                  </span>
                </span>
                <label
                  htmlFor="appointment-date"
                  className={`absolute left-10 text-gray-500 ${
                    appointmentDate ? "invisible" : "visible"
                  }`}
                >
                  Appointment Date
                </label>
              </div>

              {/* Department Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-[90%] md:w-[44%]">
                <span className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-4 text-gray-600 outline-none focus:border-blue-500">
                  <select
                    className="h-full w-full cursor-pointer rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 outline-none focus:border-blue-500"
                    id="departments-drp"
                    value={department}
                    style={{ opacity: 0 }}
                    onChange={(e) => {
                      setDepartment(e.target.value);
                      setDoctorFirstName("");
                      setDoctorLastName("");
                    }}
                  >
                    <option value="" disabled>
                      {departmentsArray[0]}
                    </option>
                    {departmentsArray.slice(1).map((depart, index) => {
                      return (
                        <option value={depart} key={index + 1}>
                          {" "}
                          {depart}
                        </option>
                      );
                    })}
                  </select>
                  <span
                    className={`absolute left-10 top-5 z-[-5] h-[70%] w-[90%] justify-between bg-transparent text-gray-500 ${department === "" ? "visible" : "invisible"} flex`}
                  >
                    Department
                    <ChevronDown />
                  </span>
                </span>
                <label
                  htmlFor="departments-drp"
                  className={`absolute left-10 text-gray-500 ${
                    department === "" ? "invisible" : "visible"
                  }`}
                >
                  {department}
                </label>
              </div>

              {/* Doctor Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-[90%] md:w-[44%]">
                <span className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-4 text-gray-600 outline-none focus:border-blue-500">
                  <select
                    className="h-full w-full cursor-pointer rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 outline-none focus:border-blue-500"
                    id="doctors-dc"
                    style={{ opacity: 0 }}
                    value={`${doctorFirstName} ${doctorLastName}`}
                    onChange={(e) => {
                      const [firstName, lastName] = e.target.value.split(" ");
                      setDoctorFirstName(firstName);
                      setDoctorLastName(lastName);
                    }}
                    disabled={!department}
                  >
                    <option value=" " disabled>
                      Select Doctor
                    </option>
                    {doctors
                      .filter(
                        (doctor) => doctor.doctorDepartment === department,
                      )
                      .map((doctor, index) => {
                        return (
                          <option
                            value={`${doctor.firstName} ${doctor.lastName}`}
                            key={index}
                          >
                            {doctor.firstName} {doctor.lastName}
                          </option>
                        );
                      })}
                  </select>
                  <span
                    className={`absolute left-10 top-5 z-[-5] h-[70%] w-[90%] justify-between bg-transparent text-gray-500 ${doctorFirstName === "" ? "visible" : "invisible"} flex`}
                  >
                    Doctor
                    <ChevronDown />
                  </span>
                </span>
                <label
                  htmlFor="doctors-dc"
                  className={`absolute left-10 text-gray-500 ${
                    doctorFirstName === "" ? "invisible" : "visible"
                  }`}
                >
                  {doctorFirstName}
                </label>
              </div>

              {/* Address Field */}
              <div className="relative m-7 flex w-[94%]">
                <textarea
                  rows={5}
                  type="text"
                  className="text:black h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 pt-5 text-gray-600 placeholder-gray-600 outline-none focus:border-blue-500 dark:text-gray-500 dark:placeholder-gray-500"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* Visited Before? */}
            <div className="flex justify-end pb-10 pr-10">
              <span className="pr-4 text-xl text-gray-600 dark:text-gray-500">
                Have You Visited Before?
              </span>
              <input
                type="checkbox"
                checked={hasVisited}
                onChange={(e) => setHasVisited(e.target.checked)}
              ></input>
            </div>

            {/* Send Button */}
            <div className="my-2 flex justify-center">
              <button
                type="submit"
                className="w-1/4 rounded-lg bg-login-button-bg-light bg-opacity-60 py-2 text-white transition-colors hover:bg-login-button-hover-bg-light hover:bg-opacity-80 dark:bg-login-button-bg-dark dark:hover:bg-login-button-hover-bg-dark"
              >
                Get Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
