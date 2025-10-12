import { useParams, useNavigate } from "react-router-dom";
import ProductsData from "../data/products";
import { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../data/CartContext.jsx";
import useGoogleSheet from "../data/useGoogleSheet.js";

export default function ProductDetails() {
  const { addToCart, cart } = useCart(); // ✅ Use global cart
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [prevCartLength, setPrevCartLength] = useState(0);
   const {
     error,
     loading,
     rows = [],
   } = useGoogleSheet(
     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTpvv2L2-Q_jSBRIW8-d8G9VHpTFKqnxUC3_0AjS45ADQO6c2osRI_ybnhot_I1iAU2rwznEOB9GGZg/pub?gid=0&single=true&output=csv"
   );

  const product = rows.find((p) => p.id.toString() === id);

  // ✅ Automatically open cart when an item is added
  useEffect(() => {
    if (cart.length > prevCartLength) {
      // You can add logic here to show a notification or open cart drawer
      // Since we're in a separate page, we can show a success message or redirect
      console.log("Item added to cart!");
    }
    setPrevCartLength(cart.length);
  }, [cart.length, prevCartLength]);

  // Enhanced product data with fallbacks
  const enhancedProduct = product
    ? {
        ...product,
        images: product.images || [product.img, product.img, product.img],
        features: product.features || [
          "High-quality materials",
          "Durable construction",
          "Easy to maintain",
          "1-year warranty",
        ],
        specifications: product.specifications || {
          Material: "Premium quality",
          Dimensions: "10 x 8 x 5 inches",
          Weight: "2.5 kg",
          Color: "As shown in pictures",
          Brand: "Premium Brand",
        },
        shippingInfo:
          product.shippingInfo || "Free shipping within 3-5 business days",
        returnPolicy: product.returnPolicy || "30-day money-back guarantee",
      }
    : null;

  const handleAddToCart = () => {
    addToCart(enhancedProduct);
    // Show success feedback
    alert(`${enhancedProduct.title} added to cart!`);
  };

  if (!enhancedProduct) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-orange-600">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-6">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="text-orange-600 mb-6 flex items-center hover:text-orange-700 transition-colors"
      >
        ← Back to Products
      </button>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="mb-4">
            <img
              src={enhancedProduct.images[selectedImageIndex]}
              alt={enhancedProduct.title}
              className="w-full h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {enhancedProduct.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`border-2 rounded-lg overflow-hidden transition-all ${
                  selectedImageIndex === index
                    ? "border-orange-500"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={image}
                  alt={`${enhancedProduct.title} view ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-3">{enhancedProduct.title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">{"★".repeat(5)}</div>
              <span className="ml-2 text-gray-600">(42 reviews)</span>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            {enhancedProduct.description}
          </p>

          {/* Price */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-orange-600">
              ₦{enhancedProduct.price.toLocaleString()}
            </p>
            <p className="text-green-600 font-medium">
              In Stock • {enhancedProduct.shippingInfo}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2">
              {enhancedProduct.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 group/btn"
          >
            <FiShoppingCart className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
            Add to Cart
          </button>

          {/* View Cart Button */}
          <button
            onClick={() => navigate("/categories")}
            className="w-full flex items-center justify-center gap-2 py-3 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-medium rounded-lg transition-all duration-300"
          >
            View Cart & Continue Shopping
          </button>

          {/* Specifications + Returns */}
          <div className="border-t pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Specifications</h4>
                <div className="space-y-1 text-sm">
                  {Object.entries(enhancedProduct.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600">{key}:</span>
                        <span>{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Shipping & Returns</h4>
                <p className="text-sm text-gray-600">
                  {enhancedProduct.returnPolicy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-16 border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Product Description</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            This premium product is designed with attention to detail and
            crafted from the finest materials. Perfect for everyday use while
            maintaining exceptional quality and durability.
          </p>
          <p className="text-gray-700 mb-4">
            Each item undergoes rigorous quality control to ensure it meets our
            high standards. The elegant design combines functionality with
            style, making it a perfect addition to your collection.
          </p>
          <h3 className="text-lg font-semibold mb-2">
            Why Choose This Product?
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Expert craftsmanship and attention to detail</li>
            <li>Premium materials for long-lasting use</li>
            <li>Designed for both style and functionality</li>
            <li>Backed by our satisfaction guarantee</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
