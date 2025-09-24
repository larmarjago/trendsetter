import React, { useState } from "react";
import { FiFilter, FiX } from "react-icons/fi";

export default function FilterBar({ filters, setFilters }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasActiveFilters =
    filters.size !== "All" ||
    filters.color !== "All" ||
    filters.price !== "All";

  const clearFilters = () => {
    setFilters({ size: "All", color: "All", price: "All" });
  };

  const FilterSelect = ({ value, onChange, options, placeholder }) => (
    <select
      value={value}
      onChange={onChange}
      className="px-3 py-2 border-b-2 border-orange-200 bg-transparent text-sm focus:border-orange-500 focus:outline-none transition-colors"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  const filterOptions = {
    size: [
      { value: "All", label: "All Sizes" },
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
    ],
    color: [
      { value: "All", label: "All Colors" },
      { value: "Black", label: "Black" },
      { value: "White", label: "White" },
      { value: "Blue", label: "Blue" },
      { value: "Red", label: "Red" },
    ],
    price: [
      { value: "All", label: "All Prices" },
      { value: "low", label: "Under ₦10k" },
      { value: "mid", label: "₦10k-₦20k" },
      { value: "high", label: "Over ₦20k" },
    ],
  };

  return (
    <div className="mb-6">
      {/* Compact Filter Header */}
      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-all ${
            isExpanded || hasActiveFilters
              ? "bg-orange-500 text-white"
              : "bg-orange-100 text-orange-600 hover:bg-orange-200"
          }`}
        >
          <FiFilter className="w-3 h-3" />
          Filters
          {hasActiveFilters && (
            <span className="bg-white text-orange-600 text-xs px-1 rounded-full min-w-[16px]">
              {
                [filters.size, filters.color, filters.price].filter(
                  (f) => f !== "All"
                ).length
              }
            </span>
          )}
        </button>

        {hasActiveFilters && isExpanded && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 px-2 py-1 text-orange-600 hover:text-orange-700 text-xs transition-colors"
          >
            <FiX className="w-3 h-3" />
            Clear
          </button>
        )}
      </div>

      {/* Expandable Filter Controls */}
      {isExpanded && (
        <div className="flex flex-wrap items-center gap-4 p-3 border border-orange-100 rounded-lg bg-white animate-fadeIn">
          <FilterSelect
            value={filters.size}
            onChange={(e) => setFilters({ ...filters, size: e.target.value })}
            options={filterOptions.size}
          />

          <FilterSelect
            value={filters.color}
            onChange={(e) => setFilters({ ...filters, color: e.target.value })}
            options={filterOptions.color}
          />

          <FilterSelect
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
            options={filterOptions.price}
          />
        </div>
      )}

      {/* Active Filters Pill */}
      {hasActiveFilters && !isExpanded && (
        <div className="flex flex-wrap gap-2">
          {filters.size !== "All" && (
            <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
              Size: {filters.size}
            </span>
          )}
          {filters.color !== "All" && (
            <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
              Color: {filters.color}
            </span>
          )}
          {filters.price !== "All" && (
            <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
              {filters.price === "low" && "Under ₦10k"}
              {filters.price === "mid" && "₦10k-₦20k"}
              {filters.price === "high" && "Over ₦20k"}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
