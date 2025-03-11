// write the component code here
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/100";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 (123) 456-7890";
  const address = "123 Main St, Springfield, USA";

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-5">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={profilePhoto}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600 text-center">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;
