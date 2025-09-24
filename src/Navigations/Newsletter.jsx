// components/Newsletter.jsx
import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("NewsLetter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-white border-t border-b border-orange-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-light text-gray-900 mb-3 tracking-wide">
            Join Our Community
          </h2>
          <div className="w-12 h-px bg-orange-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Receive exclusive updates on new collections and special offers
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-sm"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-light text-sm tracking-wide transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>

        <p className="text-gray-400 text-xs mt-4">
          Unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
