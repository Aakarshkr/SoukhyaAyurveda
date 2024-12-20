import React from 'react';
import { assets } from '../assets/assets';

const AyurvedicLifestyle = () => {
  const lifestyleTips = [
    {
      title: 'Dinacharya (Daily Routine)',
      image: assets.dinacharya,
      description:
        'Follow a structured daily routine including waking up early, practicing yoga, meditation, and eating balanced meals to align with nature’s rhythm.',
    },
    {
      title: 'Balanced Diet',
      image: assets.diet,
      description:
        'Eat fresh, seasonal, and organic foods that suit your Dosha. Avoid processed food and maintain a balance of all six tastes: sweet, sour, salty, bitter, pungent, and astringent.',
    },
    {
      title: 'Yoga and Pranayama',
      image: assets.yoga,
      description:
        'Incorporate yoga and breathing exercises to enhance physical strength, flexibility, and mental peace. These practices help maintain a harmonious mind-body connection.',
    },
    {
      title: 'Seasonal Detox',
      image: assets.detox,
      description:
        'Cleanse your body with Ayurvedic detox practices such as Panchakarma to eliminate toxins and rejuvenate your system.',
    },
    {
      title: 'Adequate Sleep',
      image: assets.sleep,
      description:
        'Prioritize quality sleep by maintaining a consistent bedtime. Avoid screens before sleeping and unwind with calming herbal teas or essential oils.',
    },
    {
      title: 'Herbal Remedies',
      image: assets.herbal,
      description:
        'Integrate Ayurvedic herbs like Ashwagandha, Triphala, and Turmeric into your routine for enhanced immunity, digestion, and vitality.',
    },
  ];

  return (
    <section id="ayurvedic-lifestyle" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-8">Ayurvedic Lifestyle</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Embrace a holistic way of living with Ayurvedic principles that promote health, balance, and harmony. Discover daily routines, diet tips, and practices for overall well-being.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {lifestyleTips.map((tip, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
                loading="lazy" // Lazy loading applied here
              />
              <h3 className="text-2xl font-semibold text-green-700 mb-3">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AyurvedicLifestyle;
