import React, { useState } from "react";
import { assets } from "../assets/assets";

const treatments = [
  {
    name: "ABHYANGAM",
    description:
      "Imparts softness, strength, and complexion to the body. Reduces aging, nourishes the body, and improves longevity.",
    img: assets.abhayangam,
  },
  {
    name: "SHIRODHARA",
    description:
      "Helps with insomnia, headaches, hair fall, paralysis, and mental fatigue. Promotes relaxation and calmness.",
    img: assets.shirodhara,
  },
  {
    name: "KIZHI",
    description:
      "Boosts blood circulation, relaxes the body, and relieves spasms, joint pain, and stiffness.",
    img: assets.kizhi,
  },
  {
    name: "NASYAM",
    description:
      "Cleanses the head and respiratory system. Treats migraines, sinusitis, and facial paralysis.",
    img: assets.nasya,
  },
  {
    name: "UDVARTHANAM",
    description:
      "Used for fat depletion and glowing skin. Treats obesity, abdominal fat, and rheumatic ailments.",
    img: assets.udvartanam,
  },
  {
    name: "KATI BASTI",
    description:
      "Reduces localized pain like back pain and improves flexibility. Relieves stiffness.",
    img: assets.kativasti,
  },
  {
    name: "PIZHICHIL",
    description:
      "A soothing therapy to strengthen the nervous system. Beneficial for arthritis and paralysis.",
    img: assets.pizhichil,
  },
  {
    name: "REJUVENATION",
    description:
      "Combination of therapies for collagen stimulation and youthful skin. Repairs damage and improves tone.",
    img: assets.rejuventaton,
  },
  {
    name: "LEECH THERAPY",
    description:
      "Effective Ayurvedic treatment for varicose veins and other circulatory issues.",
    img: assets.leech,
  },
];

const TreatmentCard = ({ treatment }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
      <div className="relative w-full h-48 bg-gray-200">
        {/* Placeholder or Skeleton */}
        {!isLoaded && <div className="absolute inset-0 bg-gray-300 animate-pulse" />}
        <img
          src={treatment.img}
          alt={treatment.name}
          className={`w-full h-48 object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)} // Set isLoaded to true when image finishes loading
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          {treatment.name}
        </h3>
        <p className="text-gray-600">{treatment.description}</p>
      </div>
    </div>
  );
};

const Treatment = () => {
  return (
    <section id="treatments" className="py-20 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-12">
          Ayurvedic Treatments
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={index} treatment={treatment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatment;
