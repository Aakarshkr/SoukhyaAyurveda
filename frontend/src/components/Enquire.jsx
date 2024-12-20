import React from 'react'

const Enquire = () => {
  return (
    <div>
        <section className="py-12 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Enquire Now</h2>
        <form className="max-w-3xl mx-auto bg-green-50 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows="4"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </section>
      
    </div>
  )
}

export default Enquire
