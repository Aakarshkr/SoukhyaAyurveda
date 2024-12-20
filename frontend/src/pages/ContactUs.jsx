import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <section className="py-12 px-6 md:px-20 bg-gray-50 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <form action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-lg font-semibold">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-lg font-semibold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="text-lg font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                required
              ></textarea>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
