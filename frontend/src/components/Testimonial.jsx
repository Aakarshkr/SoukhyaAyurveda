import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anjali K.',
      feedback: 'The treatments at Soukhya Ayurveda completely transformed my health. The team is professional, caring, and knowledgeable.',
      location: 'Bangalore, India',
    },
    {
      name: 'Rahul P.',
      feedback: 'The Panchakarma therapy was life-changing. I feel more energetic and balanced than ever before.',
      location: 'Mumbai, India',
    },
    {
      name: 'Meera S.',
      feedback: 'The serene atmosphere and skilled therapists make Soukhya the best Ayurvedic center I’ve visited.',
      location: 'Kerala, India',
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-8">What Our Clients Say</h2>
        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-green-100 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
                <h3 className="text-lg font-semibold text-green-800">{testimonial.name}</h3>
                <span className="text-sm text-gray-500">{testimonial.location}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
