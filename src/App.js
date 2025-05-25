import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./Components";
import { CartPage } from "./Cart";
import { Signin } from "./SignIn";
import {Login} from "./Login"

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
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
