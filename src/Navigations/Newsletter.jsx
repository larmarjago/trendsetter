// components/Newsletter.jsx
import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // 'success', 'error', 'loading'
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      // Simulate API call to newsletter service
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would integrate with your newsletter service (Mailchimp, ConvertKit, etc.)
      // Example: await axios.post('/api/newsletter', { email });

      setStatus("success");
      setMessage(
        "Thank you for subscribing! Check your email for confirmation."
      );
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("");
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
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
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-light text-sm tracking-wide transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>

        {/* Status Messages */}
        {message && (
          <div
            className={`mt-4 text-sm ${
              status === "success"
                ? "text-green-600"
                : status === "error"
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {message}
          </div>
        )}

        <p className="text-gray-400 text-xs mt-4">
          Unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
