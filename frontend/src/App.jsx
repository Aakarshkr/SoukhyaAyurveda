import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import HomePage from "./pages/HomePage";
import Chatbox from "./components/ChatBox";
import Navbar from './components/Navbar';
import ContactUs from "./pages/ContactUs";
import FacilitiesPage from "./pages/FacilitiesPage";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

  // Handle Cookie Consent
  const handleCookieConsent = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 365); // Adds 365 days to current date
  
    setCookie("cookieConsent", "accepted", { expires: expiryDate });
    setCookie("session_id", "unique_session_id", { expires: new Date(Date.now() + 86400000) }); // 1 day expiry
    console.log("Cookie Consent Given!");
  };

  return (
    <Router>
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-16"> {/* 16 represents the height of the fixed navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* Cookie Consent Banner */}
      {!cookies.cookieConsent && (
        <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50">
          <span>
            We use cookies to improve your experience. By using our site, you agree to our{" "}
            <a href="/cookie-policy" className="underline">
              Cookie Policy
            </a>
            .
          </span>
          <button
            onClick={handleCookieConsent}
            className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
          >
            Accept
          </button>
        </div>
      )}

      {/* Chatbox Component */}
      <div className={`relative ${!cookies.cookieConsent ? "mb-16" : ""}`}>
        <Chatbox />
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;
