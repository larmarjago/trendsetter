import React, { useState } from "react";
import { FiShoppingBag, FiArrowLeft } from "react-icons/fi";
import CartDrawer from "./CartDrawer";
import FilterBar from "./Filter";
import Search from "./Search";
import ProductCard from "./Product";

// ✅ Import Data
import CategoriesData from "../data/categories";
import ProductsData from "../data/products";

// ✅ Destructure Data
const categories = CategoriesData;
let products = ProductsData;

// ✅ Import Logo
import image1 from "../assets/12.png";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filters, setFilters] = useState({
    size: "All",
    color: "All",
    price: "All",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const whatsappNumber = "2348025212586";

  // ✅ Cart Functions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const increaseQty = (id) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );

  const decreaseQty = (id) =>
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );

  const checkout = () => {
    if (cart.length === 0) return alert("Cart is empty!");

    const items = cart
      .map(
        (i) => `${i.qty}x ${i.title} = ₦${(i.price * i.qty).toLocaleString()}`
      )
      .join("%0A");

    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    const message = `Hi Ayo, I want to order:%0A${items}%0A%0ATotal: ₦${total.toLocaleString()}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  // ✅ Search & Filter Logic
  const searchedProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedProducts = activeCategory
    ? searchedProducts.filter((prod) => prod.category === activeCategory)
    : searchedProducts;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white min-h-screen">
      {/* Header with Cart Badge */}
      <header className="flex items-center justify-between mb-12 relative">
        <div className="text-center flex-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            🧢 Trendsetters Store
          </h1>
          <p className="text-gray-600 mt-2">
            Curated Fashion for the Modern You
          </p>
        </div>
        <div
          className="relative cursor-pointer group p-3 rounded-full hover:bg-orange-50 transition-all duration-300 border-2 border-orange-100"
          onClick={() => setIsCartOpen(true)}
        >
          <FiShoppingBag className="text-2xl text-orange-600 group-hover:text-orange-700 transition-colors" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform border-2 border-white">
              {cart.reduce((sum, item) => sum + item.qty, 0)}
            </span>
          )}
        </div>
      </header>

      {/* ✅ Global Search */}
      <div className="mb-12">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Category / Products */}
      {!activeCategory ? (
        <>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discover Your Style
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections designed to elevate your
              everyday look
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => setActiveCategory(cat.id)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg border-2 border-orange-100">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col items-center justify-end pb-6">
                    <div className="text-white text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                      {<cat.icon />}
                    </div>
                    <span className="text-white text-xl font-semibold mb-2">
                      {cat.name}
                    </span>
                    <div className="w-12 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center mb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className="flex items-center px-6 py-3 border-2 border-orange-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 group"
            >
              <FiArrowLeft className="mr-2 text-orange-600 group-hover:text-orange-700 transition-colors" />
              <span className="font-medium text-orange-700 group-hover:text-orange-800">
                Back to Categories
              </span>
            </button>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-white rounded-3xl p-8 mb-8 shadow-sm border border-orange-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              {categories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              {categories.find((c) => c.id === activeCategory)?.description}
            </p>
          </div>

          {/* ✅ Filters */}
          <div className="mb-12">
            <FilterBar filters={filters} setFilters={setFilters} />
          </div>

          {/* ✅ Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  addToCart={addToCart}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="text-6xl mb-4 text-orange-500">🔍</div>
                <p className="text-xl text-gray-600">
                  No products found matching your criteria.
                </p>
                <p className="text-gray-500">
                  Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </>
      )}

      {/* ✅ Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeFromCart={removeFromCart}
        checkout={checkout}
      />
    </section>
  );
}
