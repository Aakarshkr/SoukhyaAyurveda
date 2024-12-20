import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track which FAQ is open

  const faqs = [
    {
      question: 'What is Ayurveda?',
      answer:
        'Ayurveda is a holistic healing system originating in India over 5,000 years ago. It focuses on balancing the mind, body, and spirit through natural remedies, diet, and lifestyle practices.',
    },
    {
      question: 'How do I determine my Dosha?',
      answer:
        'Your Dosha (body type) can be determined through an Ayurvedic consultation, which evaluates your physical, mental, and emotional characteristics. The three Doshas are Vata, Pitta, and Kapha.',
    },
    {
      question: 'Are Ayurvedic treatments safe?',
      answer:
        'Yes, Ayurvedic treatments are generally safe when performed by trained professionals. It’s essential to follow the guidance of certified practitioners for personalized care.',
    },
    {
      question: 'How long does it take to see results from Ayurvedic treatments?',
      answer:
        'The results vary depending on the individual, condition, and treatment plan. Some people experience immediate relief, while others may need consistent therapy over weeks or months.',
    },
    {
      question: 'Can Ayurveda be combined with modern medicine?',
      answer:
        'Yes, Ayurveda can complement modern medicine, but it’s important to consult both your Ayurvedic practitioner and medical doctor to avoid conflicts between treatments.',
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active FAQ
  };

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition hover:shadow-lg"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-green-700">{faq.question}</h3>
                <span className="text-green-600">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
