import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight } from "react-icons/fa";
import homeImage from "../assets/home-logo.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-screen bg-stone-200 flex flex-row items-center justify-center space-x-8 px-10">
      <div className="md:w-1/2 text-2xl font-bold text-center ">
        <header className="mb-4">
          <h1 className="text-4xl font-bold text-gray-800 ">
            Welcome to My Personal Page
          </h1>
          <span className="mt-6 underline decoration-dotted decoration-2 hover:scale-110 transition-transform duration-300 ease-in-out inline-block">
            Hi there! I’m{" "}
            <Typewriter
              words={[
                "Srikrishna Das",
                "aspiring fullstack developer",
                "eager to find an opportunity",
              ]}
              className="text-red-50 "
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={1500}
            />
          </span>
          ,
          <p className="p-10 pt-4">
            {" "}
            an enthusiastic developer with a passion for learning and building
            impactful solutions. I'm currently seeking exciting job
            opportunities to kickstart my career in tech.
          </p>
        </header>

        <div className="relative">
          <Link
            to="/profile"
            className="flex w-40 text-center items-center mx-auto p-2 bg-teal-900 rounded-lg text-gray-200 font-semibold text-lg hover:bg-emerald-800 hover:text-gray-700 hover:scale-105 transition-transform duration-300"
          >
            My Profile <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
      <div className=" hidden lg:block md:w-1/2">
        <motion.img
          src={homeImage}
          alt="Home Logo"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Home;
