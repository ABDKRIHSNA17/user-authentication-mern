import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="md:h-[calc(100vh-120px)] bg-stone-200">
      <div className="text-2xl font-bold text-center">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-20">
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
      </div>
      <div className="relative pb-4">
  <button className="flex items-center mx-auto p-2 bg-teal-900 rounded-lg text-gray-200 font-semibold text-lg hover:bg-emerald-800">
    Let Go My Profile <FaArrowRight className="ml-2" />
  </button>
</div>
    </div>
  );
};

export default Home;
