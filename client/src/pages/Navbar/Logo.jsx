import React from "react";
import { motion } from "framer-motion";
import murali from "../../assets/LogoImg/murali.jpg";
const Logo = () => {
  return (
      <div className="text-2xl font-bold ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-row m-0 p-0 "
        >
          <h2 className="absolute top-[16px] left-[50px] md:left-[80px] font-extrabold text-orange-900">
            Krishna
          </h2>
          <img src={murali} alt="" className="w-[150px] h-[50px] rounded-full" />
        </motion.div>
      </div>
  );
};

export default Logo;
