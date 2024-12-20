import React, { useState, useEffect, useRef } from "react";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! How can I assist you today?", options: ["Booking", "Location", "About Us"] },
  ]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null); // Ref for auto-scrolling

  // Option Handlers
  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, { type: "user", text: option }]);
    setLoading(true);

    setTimeout(() => {
      let botResponse = { text: "I'm sorry, I couldn't find an answer." };

      switch (option.toLowerCase()) {
        case "booking":
          botResponse = {
            text: "Do you want to know how to book an appointment or check availability?",
            options: ["How to book", "Check availability"],
          };
          break;

        case "location":
          botResponse = {
            text: "We are located in Vaniyamkulam, Palakkad, Kerala. Would you like directions or more info?",
            options: ["Directions", "More info"],
          };
          break;

        case "about us":
          botResponse = {
            text: "We are a traditional Ayurvedic center offering treatments and wellness services. Would you like to know about facilities or contact info?",
            options: ["Facilities", "Contact Info"],
          };
          break;

        case "how to book":
          botResponse = {
            text: "To book an appointment, please call us at +91 12345 67890 or email info@ayursowkya.com.",
          };
          break;

        case "check availability":
          botResponse = {
            text: "Please call us at +91 12345 67890 for availability.",
          };
          break;

        case "directions":
          botResponse = {
            text: "We are located at AyurSowkya, Vaniyamkulam, Palakkad, Kerala. You can find us on Google Maps.",
          };
          break;

        case "more info":
          botResponse = {
            text: "Our hospital offers traditional Ayurvedic treatments. Visit our website for more details.",
          };
          break;

        case "facilities":
          botResponse = {
            text: "We provide Panchakarma Therapy, Yoga & Meditation, and an Ayurvedic Pharmacy.",
          };
          break;

        case "contact info":
          botResponse = {
            text: "You can contact us at +91 12345 67890 or email info@ayursowkya.com.",
          };
          break;

        default:
          botResponse = {
            text: "I'm sorry, I couldn't understand that. Please try again.",
          };
      }

      setMessages((prev) => [...prev, { type: "bot", text: botResponse.text, options: botResponse.options }]);
      setLoading(false);
    }, 1000);
  };

  // Scroll to bottom whenever messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="z-10 relative">
      {/* Chatbox Toggle Button */}
      <div
        className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-green-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "×" : "💬"}
      </div>

      {/* Chatbox Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white border border-gray-300 rounded-lg shadow-lg">
          {/* Header */}
          <div className="bg-green-600 text-white p-3 rounded-t-lg text-center font-bold">
            Soukhya Ayurveda Chat Support
          </div>

          {/* Chat History */}
          <div className="p-3 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index}>
                <div
                  className={`mb-2 ${
                    msg.type === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      msg.type === "user"
                        ? "bg-green-200 text-gray-700"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>

                {/* Render Options if available */}
                {msg.options && (
                  <div className="flex flex-wrap gap-2">
                    {msg.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(option)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="text-left text-gray-500 italic">Typing...</div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Field */}
          <div className="p-2 border-t border-gray-300 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleOptionClick(input);
              }}
            />
            <button
              onClick={() => handleOptionClick(input)}
              className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
