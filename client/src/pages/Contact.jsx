import React, { useState } from 'react';

const HireMeForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    designation: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.company || !formData.designation || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }
    alert("This page is under working ! please mail me only4abdkrishna@gmail.com");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Hire Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Your company's name"
            />
          </div>

          <div>
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Your job title"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
        <div>please mail me only4abdkrishna@gmail.com</div>
      </div>
    </div>
  );
};

export default HireMeForm;
