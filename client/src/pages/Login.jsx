import React, { useState } from "react";
import api from "../api";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });
      toast.success(response.data.message);
      navigate("/profile");
    } catch (error) {
      console.error("Error submitting", error.message);
      toast.error("Email or password is invalid");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  return (
    <div className="flex items-center justify-center bg-gray-300 h-[calc(100vh-120px)]">
      <div className="w-full max-w-md p-8 bg-gray-200 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center border border-stone-300 rounded-md shadow-xl">
              <FaEnvelope className="mx-2 text-gray-500 text-2xl" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 focus:outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-base font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border border-stone-300 rounded-md shadow-xl">
              <FaLock className="mx-2 text-gray-500 text-2xl" />
              <input
                type={passwordVisible ? "text" : "password"} // Change input type based on visibility
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 focus:outline-none bg-transparent"
              />
              <button
                type="button" // Prevents form submission
                onClick={togglePasswordVisibility}
                className="mx-2 text-gray-500 text-2xl"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Toggle icon */}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
