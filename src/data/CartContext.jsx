import { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Custom hook to use cart
export const useCart = () => useContext(CartContext);

// Cart Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Add to cart
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

  // ✅ Remove
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  // ✅ Increase qty
  const increaseQty = (id) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );

  // ✅ Decrease qty
  const decreaseQty = (id) =>
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );

  // ✅ Checkout via WhatsApp
  const checkout = () => {
    if (cart.length === 0) return alert("Cart is empty!");

    const whatsappNumber = "2348025212586";

    const items = cart
      .map(
        (i) => `${i.qty}x ${i.title} = ₦${(i.price * i.qty).toLocaleString()}`
      )
      .join("%0A");

    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    const message = `Hi Ayo, I want to order:%0A${items}%0A%0ATotal: ₦${total.toLocaleString()}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
