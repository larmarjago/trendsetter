// components/CartDrawer.jsx
import React from "react";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

export default function CartDrawer({
  isOpen,
  cart,
  onClose,
  increaseQty,
  decreaseQty,
  removeFromCart,
  checkout,
}) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-orange-200 bg-orange-50">
          <div>
            <h3 className="text-xl font-bold text-gray-900">🛒 Your Cart</h3>
            <p className="text-sm text-orange-600">
              {cart.length} item{cart.length !== 1 ? "s" : ""} in cart
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-orange-100 rounded-full transition-colors duration-200"
          >
            <FiX className="text-xl text-orange-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="text-6xl mb-4 text-orange-200">🛒</div>
              <p className="text-gray-500 text-lg mb-2">Your cart is empty</p>
              <p className="text-gray-400 text-sm">
                Add some items to get started
              </p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 bg-white border border-orange-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 truncate">
                      {item.title}
                    </p>
                    <p className="text-orange-600 font-medium">
                      ₦{item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="p-1 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors duration-200"
                        >
                          <FiMinus className="w-3 h-3" />
                        </button>
                        <span className="font-medium text-gray-900 min-w-[20px] text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="p-1 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors duration-200"
                        >
                          <FiPlus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                        title="Remove item"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-orange-200 bg-white p-6 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-semibold text-gray-900">Total:</span>
              <span className="font-bold text-orange-600">
                ₦{total.toLocaleString()}
              </span>
            </div>

            <div className="space-y-3">
              <button
                onClick={checkout}
                className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                💬 Checkout via WhatsApp
              </button>

              <button
                onClick={onClose}
                className="w-full px-6 py-3 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-medium rounded-xl transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Secure checkout • No additional fees
            </p>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />
      )}
    </>
  );
}
