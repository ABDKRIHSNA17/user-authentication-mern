import React from "react";

const Profile = () => {
  return (
    <div className="mb-10">
    <div className="h-24 flex items-center justify-center font-extrabold italic text-slate-600">
      I am trying to show here all projects
    </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 mt-8">
        <div className="p-6 bg-white rounded-lg shadow-2xl shadow-gray-900 mx-auto w-3/5">
          <h2 className="text-lg font-bold mb-2">Here I will be create a TODO </h2>
          <p className="text-gray-700">This is the content of Card 1.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-2xl shadow-gray-900 mx-auto  w-3/5">
          <h2 className="text-lg font-bold mb-2">Card 2</h2>
          <p className="text-gray-700">This is the content of Card 2.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-2xl shadow-gray-900 mx-auto  w-3/5">
          <h2 className="text-lg font-bold mb-2">Card 3</h2>
          <p className="text-gray-700">This is the content of Card 3.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-2xl shadow-gray-900 mx-auto  w-3/5">
          <h2 className="text-lg font-bold mb-2">Card 4</h2>
          <p className="text-gray-700">This is the content of Card 4.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
