"use client";
import { addToCart } from "@/reduxtoolkit/cartSlice";
import { useDispatch } from "react-redux";

export default function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center h-72 w-96 p-5 bg-white rounded-md shadow-md">
      <img
        className="object-contain mb-2"
        src={product.image}
        alt={product.title}
        height={50}
        width={50}
      />
      <div className="flex flex-col justify-center items-center p-5">
        <p className="font-semibold text-center">{product.title}</p>
        <p className="font-semibold text-center">${product.price}</p>
        <button
          className="border-2 rounded-md p-2 bg-purple-800 text-white"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
