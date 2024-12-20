import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 mt-auto">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-xl font-bold">Soukhya Ayurveda</h3>
          <p>Vaniyamkulam, Palakkad, Kerala, India</p>
          <p>Contact: +91 9633072907 | info@SoukhyaAyurveda.com</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-300 transition"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-300 transition"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-300 transition"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
        <div className="text-sm text-gray-300">
          <p>&copy; 2024 Soukhya Ayurveda. All Rights Reserved.</p>
          <p>Designed and Developed with ❤️ by Soukhya Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
