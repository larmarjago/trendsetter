import React, { useState } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../data/CartContext.jsx";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // ✅ Use global cart function
  const { addToCart } = useCart();

  return (
    <div
      className="group bg-white border border-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image with Overlay */}
      <div className="relative overflow-hidden rounded-t-lg">
        {/* ✅ Clickable image that goes to Product Details */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Quick Actions Overlay */}
        <div
          className={`absolute top-3 right-3 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white/90 text-gray-600 hover:text-red-500"
            }`}
          >
            <FiHeart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* ✅ Title links to product details */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-1 hover:text-orange-600 transition">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-semibold text-orange-600">
            ₦{product.price.toLocaleString()}
          </span>

          {/* Size/Color Tags */}
          <div className="flex gap-1">
            {product.size && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                {product.size}
              </span>
            )}
            {product.color && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                {product.color}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full flex items-center justify-center gap-2 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 group/btn"
        >
          <FiShoppingCart className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
