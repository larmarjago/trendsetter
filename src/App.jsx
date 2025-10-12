import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails"; // ✅ Import this
import { CartProvider } from "./data/CartContext.jsx"; // ✅ Import CartProvider
import CartDrawer from "./Navigations/CartDrawer";
import Categories from "./pages/Categories";
import Category from "./Category.jsx";

function App() {

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category/>} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
