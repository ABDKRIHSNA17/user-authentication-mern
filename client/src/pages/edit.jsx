import React, { useEffect , useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import api from "../api";


const Profile = () => {
  const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("/profile");
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, []);
    if (!user) ;

  return (
    <div className="mb-12">
      <div className="h-24 flex items-center justify-center font-extrabold italic text-slate-600">
        I am trying to show here all projects
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 mt-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white rounded-lg shadow-2xl shadow-gray-900 mx-auto w-3/5"
        >
          <h2 className="text-lg font-bold mb-2">Using React</h2>
          <p className="mb-3">Only used React and Tailwind CSS</p>
          <p className="text-gray-700 flex items-center gap-2 ">
            <a
              href="https://abdkrishnawithfakeapistore.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 hover:text-teal-900 underline flex items-center"
            >
              Click Here to Show <FiExternalLink className="ml-1" />
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-6 bg-white rounded-lg shadow-2xl shadow-gray-900 mx-auto w-3/5 min-h-[200px] flex flex-col justify-between"
        >
          <h2 className="text-lg font-bold mb-2">Only using JS , HTML & CSS</h2>
          <p className="text-gray-600">
            Visit my GitHub profile to view the code repository and explore more
            projects:
          </p>
          <p className="text-gray-700 flex items-center gap-2 mt-4">
            <a
              href="https://github.com/ABDKRIHSNA17/profolio_web"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 hover:text-teal-900 underline flex items-center"
            >
              GitHub Link <FiExternalLink className="ml-1" />
            </a>
          </p>
          <p className="text-gray-700 flex items-center gap-2 mt-4">
            <a
              href="https://abdkrishnaportfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 hover:text-teal-900 underline flex items-center"
            >
              Click Here to Show <FiExternalLink className="ml-1" />
            </a>
          </p>
        </motion.div>

        {/* Card 3: Scale In */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="p-6 bg-white rounded-lg shadow-2xl shadow-gray-900 mx-auto w-3/5"
        >
          <h2 className="text-lg font-bold mb-2">Card 3</h2>
          <p className="text-gray-700">This is the content of Card 3.</p>
        </motion.div>

        {/* Card 4: Slide In from Bottom */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-6 bg-white rounded-lg shadow-2xl shadow-gray-900 mx-auto w-3/5"
        >
          <h2 className="text-lg font-bold mb-2">Card 4</h2>
          <p className="text-gray-700">This is the content of Card 4.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
