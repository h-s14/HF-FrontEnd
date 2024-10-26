import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${import.meta.env.VITE_BK_URL}/api/v1/message/send`,
          { firstName, lastName, phone, email, message },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="box-border flex h-screen w-[90%] items-center justify-center px-5 pt-24 text-gray-600 dark:text-gray-400">
        <div className="rounded-lg border-gray-100 bg-gray-600 bg-opacity-10 p-6 shadow-md backdrop-blur-md backdrop-filter dark:bg-gray-800">
          <h1 className="flex justify-center pb-5 text-4xl">
            Send Us A Message
          </h1>
          <form onSubmit={handleMessage}>
            <div className="flex flex-wrap">
              {/* First Name Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-full md:sm:w-full md:w-[44%]">
                <input
                  type="text"
                  className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 outline-none focus:border-blue-500"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              {/* Last Name Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-full md:w-[44%]">
                <input
                  type="text"
                  className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 outline-none focus:border-blue-500"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              {/* Email Name Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-full md:w-[44%]">
                <input
                  type="Email"
                  className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 outline-none focus:border-blue-500"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Phone Number Field */}
              <div className="relative m-7 flex h-16 items-center sm:w-full md:w-[44%]">
                <input
                  type="number"
                  className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 outline-none focus:border-blue-500"
                  placeholder="Phone no."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              {/* Message Field */}
              <div className="relative m-7 flex w-[94%]">
                <textarea
                  rows={5}
                  type="text"
                  className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 pt-5 outline-none focus:border-blue-500"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Login Button */}
            <div className="my-2 flex justify-center">
              <button
                type="submit"
                className="w-1/4 rounded-lg bg-blue-600 bg-opacity-60 py-2 text-white transition-colors hover:bg-blue-700 hover:bg-opacity-80 dark:bg-blue-800 dark:hover:bg-blue-900"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
