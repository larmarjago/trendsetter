import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails"; // ✅ Import this
import { CartProvider } from "./data/CartContext.jsx"; // ✅ Import CartProvider
import CartDrawer from "./Navigations/CartDrawer";
import Categories from "./pages/Categories";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
