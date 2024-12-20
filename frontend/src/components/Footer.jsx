import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Soukhya Ayurveda - Vaniyamkulam, Palakkad</p>
        <p>Contact: +91 12345 67890 | info@ayursowkya.com</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:underline">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
