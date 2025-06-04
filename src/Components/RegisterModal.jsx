import React, { useState } from "react";
import axios from "axios";

export default function RegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAgreed) {
      alert("Please agree to the terms of service.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.sheetbest.com/sheets/b1a77210-f5a8-40c0-a052-7646be845329",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );
      console.log("Form submitted:", response.data);
      alert("Registration successful!");
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to register.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.3)] p-8 sm:p-10 text-white transition-transform transform scale-100 hover:scale-[1.01] duration-300">
      <div className="relative w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none text-black"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none text-black"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Repeat your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none text-black"
          />

          <div className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleChange}
              className="mr-2"
            />
            I agree all statements in&nbsp;
            <a href="#" className="text-purple-600 font-semibold underline">
              Terms of service
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?&nbsp;
            <a href="#" className="text-purple-700 font-medium underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
