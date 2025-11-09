import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./Components";
import { CartPage } from "./Cart";
import { Signup } from "./signup";
import { Signin } from "./signin";

export default function App() {
  const [products, setProducts] = useState([]);
  const [Cart, SetCart] = useState({});
  const [CartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ["mens-shirts", "laptops", "smartphones", "womens-dresses"];
        let allProducts = [];
        for (const category of categories) {
          const response = await fetch(`https://dummyjson.com/products/category/${category}`);
          const data = await response.json();
          allProducts = [...allProducts, ...data.products];
        }
        setProducts(allProducts);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    setCartCount(Object.keys(Cart).length);
  }, [Cart]);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <MainPage 
              products={products} 
              Cart={Cart} 
              SetCart={SetCart} 
              CartCount={CartCount} 
              setCartCount={setCartCount} 
            />
          } 
        />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              products={products} 
              Cart={Cart} 
              SetCart={SetCart} 
              CartCount={CartCount} 
              setCartCount={setCartCount} 
            />
          } 
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
    </Router>
  );
}
