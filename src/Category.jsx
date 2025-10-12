// pages/CategoryProducts.jsx
import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import FilterBar from "./Navigations/Filter.jsx";
import ProductCard from "./Navigations/Product.jsx";
import ProductsData from "./data/products.js"; // Or fetch from Google Sheet
import { useCart } from "./data/CartContext.jsx";
import useGoogleSheet from "./data/useGoogleSheet.js";

export default function Category() {
  const { id } = useParams(); // 👈 Get category id from URL
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({
    size: "All",
    color: "All",
    price: "All",
  });
      const { error, loading, rows=[] } = useGoogleSheet(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpvv2L2-Q_jSBRIW8-d8G9VHpTFKqnxUC3_0AjS45ADQO6c2osRI_ybnhot_I1iAU2rwznEOB9GGZg/pub?gid=0&single=true&output=csv"
      );

  
  console.log(rows);
  
  const products = rows.filter((p) => p.category === id);
console.log(products);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white min-h-screen">
      <div className="flex items-center mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center px-6 py-3 border-2 border-orange-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 group"
        >
          <FiArrowLeft className="mr-2 text-orange-600 group-hover:text-orange-700 transition-colors" />
          <span className="font-medium text-orange-700 group-hover:text-orange-800">
            Back to Categories
          </span>
        </button>
      </div>

      <h2 className="text-4xl font-bold text-gray-900 mb-6">Products</h2>

      {/* Filters */}
      <FilterBar filters={filters} setFilters={setFilters} />

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((prod) => (
            <ProductCard key={prod.id} product={prod} addToCart={addToCart} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-xl text-gray-600">No products found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
