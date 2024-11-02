import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; 

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = "";

    if (name === "userName") {
      if (!value) error = "Username is required";
      else if (value.length < 4) error = "Username must have 4 characters";
    } else if (name === "email") {
      if (!value) error = "Email is required";
    } else if (name === "password") {
      if (!value) error = "Password is required";
      else if (value.length < 4)
        error = "Password must be at least 4 characters long";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateForm = () => {
    const errors = {};
    validateField("userName", userName);
    validateField("email", email);
    validateField("password", password);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await api.post("/signup", { userName, email, password });
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      console.log(`error is ${error.message}`);
      toast.error("Failed to signup. Please check your input and try again.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-300 h-[calc(100vh-120px)]">
      <div className="w-full max-w-md p-8 bg-gray-200 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <div className="flex items-center  border  border-stone-300 rounded-md   shadow-xl">
              <input
                type="text"
                id="userName"
                name="userName"
                value={userName}
                onBlur={handleBlur}
                onChange={(e) => setUserName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 focus:outline-none bg-transparent  "
              />
              <FaUser className="mx-2 text-gray-500 text-2xl" />
            </div>
            {errors.userName && (
              <p className="text-red-500 text-sm">{errors.userName}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-700"
            >
              Email
            </label>
            <div className="flex items-center border  border-stone-300  rounded-md shadow-xl">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onBlur={handleBlur}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 focus:outline-none bg-transparent "
              />
              <FaEnvelope className="mx-2 text-gray-500 text-2xl" />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-base font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center border  border-stone-300  rounded-md shadow-xl">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onBlur={handleBlur}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 focus:outline-none bg-transparent"
              />
              <FaLock className=" mx-2 text-gray-500 text-2xl" />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
