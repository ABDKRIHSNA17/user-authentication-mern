import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const FirstProjectSection = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // State for overlay visibility

  const handleOverlayToggle = () => {
    setIsOverlayVisible((prev) => !prev); // Toggle overlay visibility
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-10 bg-stone-400 rounded-lg shadow-2xl shadow-gray-900 mx-auto w-4/5"
      >
        <h2 className="text-lg font-bold mb-2 text-center">Using React</h2>
        <p className="mb-3 flex justify-evenly">
          Only used React and Tailwind CSS
        </p>

        {/* Button to trigger the overlay */}
        <button
          onClick={handleOverlayToggle}
          className="text-teal-700 hover:text-teal-900 underline flex items-center"
        >
          Click Here to Show <FiExternalLink className="ml-1" />
        </button>
      </motion.div>

      {/* Overlay section that appears when isOverlayVisible is true */}
      {isOverlayVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} // Optional: exit animation when closing
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" // Full-screen overlay
        >
          <div className="text-white text-center p-10">
            <h2 className="text-2xl font-bold mb-4">New Section</h2>
            <p className="mb-4">This is the new content that appears!</p>
            <button
              onClick={handleOverlayToggle} // Close the overlay
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FirstProjectSection;
