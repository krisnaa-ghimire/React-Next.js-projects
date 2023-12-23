"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navigation() {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <div className="flex justify-end bg-white p-2 mb-5 rounded-md">
      <div>
        <Link className="mr-4" href="/">
          Home
        </Link>
        <Link className="mr-4" href="/cart">
          Cart
        </Link>
      </div>
      <span className="mr-4">Cart Items: {cartItems.length}</span>
    </div>
  );
}
