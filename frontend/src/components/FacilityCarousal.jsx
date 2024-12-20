import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { assets } from "../assets/assets";

const FacilityCarousel = () => {
  const facilities = [
    {
      name: "Panchakarma Therapy",
      image: assets.mainslide2,
      description: "A rejuvenating detox therapy.",
    },
    {
      name: "Yoga & Meditation Hall",
      image: assets.mainslide1,
      description: "Calm your mind and body.",
    },
    {
      name: "Ayurvedic Pharmacy",
      image: assets.mainslide3,
      description: "Authentic Ayurvedic medicines.",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      lazy={true} // Enable Swiper's lazy loading
      className="w-full h-[500px]"
    >
      {facilities.map((facility, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center transition-transform duration-500"
            style={{
              backgroundImage: `url(${facility.image})`,
            }}
          >
            <div className="bg-transparent bg-opacity-0 p-8 rounded-lg text-center text-white animate-fadeIn">
              <h3 className="text-3xl font-bold mb-2">{facility.name}</h3>
              <p className="text-lg">{facility.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FacilityCarousel;
