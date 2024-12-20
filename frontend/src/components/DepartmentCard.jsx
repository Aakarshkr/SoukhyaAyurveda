import React from "react";

const DepartmentCard = ({ name, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default DepartmentCard;
