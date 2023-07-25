import React, { useState , useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/cart";
import ProductCard from "./pages/shop/ProductCard";
import Contact from "./pages/contact/Contact";


function App() {
  const [cartItems, setCartItems] = useState([]);
  
  
    // const cartItemsLocal = JSON.parse(localStorage.getItem("cart"));
   
    
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const promptQty = window.prompt("Enter quantity for the product:", "1");
    const newQty = parseInt(promptQty);

    if (!isNaN(newQty)) {
      const updatedProduct = { ...product, quantity: newQty };
      setCartItems((prevItems) => [...prevItems, updatedProduct]);
    } else {
      
      alert("Invalid input! Quantity is set to 1");
      const updatedProduct = { ...product, quantity: 1 };
      setCartItems((prevItems) => [...prevItems, updatedProduct]);
    }

  };

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ProductCard addToCart={addToCart} />}
            />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
