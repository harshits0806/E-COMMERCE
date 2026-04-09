import { Header } from "../../Components/Header";
import axios from "axios";

import { ProductGrid } from "./productgrid";
import "./HomePage.css";

import { useEffect, useState } from "react";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <>
      <Header cart={cart} />

      <title>E-Commerce</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
