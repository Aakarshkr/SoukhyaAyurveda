import React, { useState } from "react";
import { assets } from "../assets/assets";

const conditions = [
  {
    name: "Paralysis",
    description:
      "Customized therapies to improve mobility, enhance nerve function, and promote recovery.",
    img: assets.paralysis,
  },
  {
    name: "Stress-Related Problems",
    description:
      "Therapies to relieve stress, enhance mental clarity, and restore emotional balance.",
    img: assets.stress,
  },
  {
    name: "Muscular Pain",
    description:
      "Relieves muscle tension, enhances circulation, and promotes relaxation.",
    img: assets.muscular_pain,
  },
  {
    name: "Joint Pain",
    description:
      "Treatments to reduce inflammation, improve mobility, and alleviate joint discomfort.",
    img: assets.joint_pain,
  },
  {
    name: "Obesity",
    description:
      "Weight management therapies to reduce fat, improve metabolism, and promote overall health.",
    img: assets.obesity,
  },
  {
    name: "Skin Problems",
    description:
      "Natural treatments for glowing skin, acne, and other dermatological issues.",
    img: assets.skin_problems,
  },
  {
    name: "Sleep Disturbance",
    description:
      "Relaxing therapies to promote restful sleep and improve sleep patterns.",
    img: assets.sleep_disturbance,
  },
  {
    name: "Varicose Veins",
    description:
      "Effective treatments for varicose veins and circulatory issues.",
    img: assets.varicose,
  },
  {
    name: "Diabetes",
    description:
      "Therapies to manage blood sugar levels and enhance metabolic health.",
    img: assets.diabetes,
  },
  {
    name: "Arthritis",
    description:
      "Relief from pain and stiffness associated with arthritis through holistic therapies.",
    img: assets.arthritis,
  },
  {
    name: "Chronic Allergy",
    description:
      "Natural remedies to alleviate allergies and strengthen immunity.",
    img: assets.chronic_allergy,
  },
  {
    name: "Cervical & Lumbotone Problems",
    description:
      "Specialized treatments to address neck and lower back pain.",
    img: assets.cervical_lumbotone,
  },
  {
    name: "Spondylosis",
    description:
      "Therapies to reduce stiffness, improve posture, and alleviate pain caused by spondylosis.",
    img: assets.spondylosis,
  },
  {
    name: "Eye Disease",
    description:
      "Ayurvedic treatments to improve vision and address common eye conditions.",
    img: assets.eye_disease,
  },
  {
    name: "ENT Diseases",
    description:
      "Natural remedies for ear, nose, and throat ailments.",
    img: assets.ent_diseases,
  },
  {
    name: "Infertility",
    description:
      "Holistic treatments to improve fertility and support reproductive health.",
    img: assets.infertility,
  },
  {
    name: "Migraine",
    description:
      "Customized therapies to relieve migraine pain and reduce frequency.",
    img: assets.migraine,
  },
  {
    name: "After Delivery Treatment",
    description:
      "Postnatal care to rejuvenate and restore strength after childbirth.",
    img: assets.after_delivery,
  },
];

const ConditionCard = ({ condition }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
      <div className="relative w-full h-48 bg-gray-200">
        {/* Placeholder or Skeleton */}
        {!isLoaded && <div className="absolute inset-0 bg-gray-300 animate-pulse" />}
        <img
          src={condition.img}
          alt={condition.name}
          className={`w-full h-48 object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          {condition.name}
        </h3>
        <p className="text-gray-600">{condition.description}</p>
      </div>
    </div>
  );
};

const Conditions = () => {
  return (
    <section id="conditions" className="py-20 bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-12">
           Conditions treated
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition, index) => (
            <ConditionCard key={index} condition={condition} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
