import React from "react";
import FacilityCarousel from "../components/FacilityCarousal";
import AboutUs from "../components/AboutUs";
import AyurvedicLifestyle from "../components/lifestyle";
import Treatment from "../components/Treatment";
import ShopSection from "../components/ShopSection";
import InteractiveElements from "../components/InterativeElements";
import Faqs from "../components/Faqs";
import Testimonials from "../components/Testimonial";
import Enquire from "../components/Enquire";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header>
        <FacilityCarousel />
      </header>

      <main className="flex-grow mt-4">
        {/* About Section */}
        <section id="about-us" className="">
          <AboutUs />
        </section>


        {/* Treatments Section */}
        <section id="treatments" className="">
          <Treatment />
        </section>


        {/* Ayurvedic Lifestyle Section */}
        <section id="ayurvedic-lifestyle" className="bg-gray-50 ">
          <AyurvedicLifestyle />
        </section>

        

        {/* Shop Section */}
        <section id="shop" className="bg-gray-50 ">
          <ShopSection />
        </section>

       

        {/* FAQs Section */}
        <section id="faqs" className="bg-gray-50 ">
          <Faqs />
        </section>

         {/* Interactive Elements Section */}
         <section id="interactive-elements" className="">
          <InteractiveElements />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="">
          <Testimonials />
        </section>

        {/* Enquiry Section */}
        <section id="enquiry" className="bg-gray-50 ">
          <Enquire />
        </section>
      </main>

    </div>
  );
};

export default HomePage;
