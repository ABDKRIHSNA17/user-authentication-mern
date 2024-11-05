import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import reactLogo from ".././assets/LogoImg/react-logo.png";
import jsLogo from ".././assets/LogoImg/js-logo.png";
import htmlLogo from ".././assets/LogoImg/hmtl-logo.jpg";
import cssLogo from ".././assets/LogoImg/css-logo.jpg";
import mongodbLogo from ".././assets/LogoImg/mongodb.png";
import expressLogo from ".././assets/LogoImg/express-js.webp";
import nodeLogo from ".././assets/LogoImg/node-js.svg";

const MyProjectSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  return (
    <div>
      <div className="pb-12">
        <div className="h-24 flex items-center justify-center font-extrabold italic text-slate-600">
          I am trying to show here all projects
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-10 bg-stone-400 rounded-lg shadow-2xl shadow-gray-900 mx-auto w-4/5 text-gray-800"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h2 className="text-2xl font-bold mb-2 text-center  flex flex-row gap-2 justify-center items-center ">
              Using React{" "}
              <img
                src={reactLogo}
                className="w-[40px] h-[20px] rounded-full"
                alt=""
              />
            </h2>
            <p className="mb-3 text-center tracking-tighter font-semibold">
              Only used React and Tailwind CSS
              <p>Try to create a fake api store</p>
              <p>You can check it!</p>
            </p>
            {isHovered && (
              <p className="text-gray-700 items-center gap-2 flex justify-evenly">
                <a
                  href="https://abdkrishnawithfakeapistore.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:text-teal-900 underline flex items-center"
                >
                  Click Here to Show <FiExternalLink className="ml-1" />
                </a>
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-10 bg-stone-400 rounded-lg shadow-2xl shadow-gray-900 mx-auto w-4/5"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <div>
              <div className="text-2xl font-bold mb-2 text-center  flex flex-row gap-2 justify-center items-center ">
                Only using{" "}
                <span>
                  {" "}
                  <img
                    src={jsLogo}
                    alt=""
                    className="w-[50px] h-[30px] rounded-full"
                  />
                </span>{" "}
                ,{" "}
                <span>
                  <img
                    src={htmlLogo}
                    alt=""
                    className="w-[50px] h-[30px] rounded-full"
                  />
                </span>{" "}
                <span>
                  <img
                    src={cssLogo}
                    alt=""
                    className="w-[50px] h-[30px] rounded-full"
                  />
                </span>
              </div>
              <p className="mb-3 text-center tracking-tighter font-semibold">
                It is my profilo . After learn JS then I made it
              </p>
            </div>
            {isHovered1 && (
              <>
                <p className="text-gray-700 flex justify-evenly items-center gap-2 mt-4">
                  <a
                    href="https://abdkrishnaportfolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:text-teal-900 underline flex items-center"
                  >
                    Click Here to Show <FiExternalLink className="ml-1" />
                  </a>
                </p>
                <p className="text-gray-700  items-center gap-2 mt-4 flex justify-evenly">
                  <a
                    href="https://github.com/ABDKRIHSNA17/profolio_web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:text-teal-900 underline flex items-center"
                  >
                    GitHub Link <FiExternalLink className="ml-1" />
                  </a>
                </p>
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="p-10 bg-stone-400 rounded-lg shadow-2xl shadow-gray-900 mx-auto w-4/5"
          >
            <div className="text-2xl font-bold mb-2 text-center  flex flex-row gap-2 justify-center items-center ">
              Fullstack With{" "}
              <span>
                {" "}
                <img
                  src={mongodbLogo}
                  alt=""
                  className="w-[50px] h-[30px] rounded-full"
                />
              </span>{" "}
              ,{" "}
              <span>
                <img
                  src={expressLogo}
                  alt=""
                  className="w-[50px] h-[30px] rounded-full"
                />
              </span>{" "}
              <span>
                <img
                  src={nodeLogo}
                  alt=""
                  className="w-[50px] h-[30px] rounded-full"
                />
              </span>
              <span>
                <img
                  src={reactLogo}
                  alt=""
                  className="w-[50px] h-[30px] rounded-full"
                />
              </span>
            </div>
            <p className="text-gray-700 text-center">Upcoming Project</p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-10 bg-stone-400 rounded-lg shadow-2xl shadow-gray-900 mx-auto w-4/5"
          >
            <h2 className="text-lg font-bold mb-2 text-center">UPCOMING ....</h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyProjectSection;
