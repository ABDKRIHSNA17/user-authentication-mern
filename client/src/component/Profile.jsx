import React, { useEffect, useState } from "react";
import MyProjectSection from "./MyProjectSection";
import { motion } from "framer-motion";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="bg-gray-400 pt-5">
      <div className="p-10 bg-gray-600 max-w-[300px] mx-auto rounded-xl text-center font-bold text-yellow-100">
      <h2>Welcome , 
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 4 }}
          className="italic"
        >
           {user.userName}!
        </motion.span>
        </h2>
      </div>
      <MyProjectSection />
    </div>
  );
};

export default Profile;
