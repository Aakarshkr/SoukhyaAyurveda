import React from 'react'

const AboutUs = () => {
  return (
    <div>
          <section className="py-12 px-6 md:px-20 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose SOUKHYA AYURVEDA</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">Experienced Practitioners</h3>
            <p>Our Ayurvedic doctors and therapists have years of experience in traditional healing practices.</p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">Holistic Treatments</h3>
            <p>We focus on healing the body, mind, and spirit through personalized therapies and routines.</p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">Peaceful Environment</h3>
            <p>Located in serene Vaniyamkulam, Palakkad, we offer a calm and rejuvenating environment for healing.</p>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default AboutUs
