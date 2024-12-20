import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Image or Video */}
        <div>
          <img
src={assets.about}            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Description */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 mb-6">
            We are committed to providing high-quality Ayurvedic treatments that
            help our clients achieve balance and wellness in their lives. Our
            mission is to offer personalized, holistic therapies that rejuvenate
            the body and mind.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-lg text-gray-700 mb-6">
            Founded with a deep belief in the healing power of Ayurveda, our
            clinic has been helping individuals from all walks of life to recover
            and rejuvenate. We combine traditional Ayurvedic practices with
            modern therapies to create a comprehensive healing experience.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg text-gray-700">Holistic Care</li>
            <li className="text-lg text-gray-700">Authenticity and Tradition</li>
            <li className="text-lg text-gray-700">Personalized Treatment</li>
            <li className="text-lg text-gray-700">Sustainable Wellness</li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">
          Discover more about our services and treatments. Get in touch with us to
          start your wellness journey today.
        </p>
      </div>
    </div>
  );
};

export default About;
