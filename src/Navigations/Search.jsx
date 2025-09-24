import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function Search({ searchTerm, setSearchTerm }) {
  const [isFocused, setIsFocused] = useState(false);

  const clearSearch = () => setSearchTerm("");

  return (
    <div className="relative w-full max-w-md mx-auto mb-6">
      <div
        className={`relative transition-all duration-300 ${
          isFocused ? "scale-105" : "scale-100"
        }`}
      >
        {/* Search Icon */}
        <FiSearch
          className={`absolute top-3 left-3 text-lg transition-colors ${
            isFocused || searchTerm ? "text-orange-500" : "text-gray-400"
          }`}
        />

        {/* Input */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search products..."
          className="w-full pl-10 pr-10 py-3 border-b-2 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none transition-colors border-orange-200 focus:border-orange-500"
        />

        {/* Clear Button */}
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute top-3 right-3 p-1 text-gray-400 hover:text-orange-500 transition-colors"
          >
            <FiX className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Counter (Minimal) */}
      {searchTerm && (
        <div className="absolute -bottom-6 left-0 right-0 text-center">
          <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
            Searching...
          </span>
        </div>
      )}
    </div>
  );
}
