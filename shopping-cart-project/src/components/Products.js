"use client";
import { useState, useEffect } from "react";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
