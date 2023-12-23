"use client";
import { removeFromCart } from "@/reduxtoolkit/cartSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5 ">
      {cartItems.map((cartItem) => (
        <div
          key={cartItem.id}
          className="flex justify-between items-center p-5 bg-white rounded-md shadow-md"
        >
          <img
            src={cartItem.image}
            alt={cartItem.title}
            height={50}
            width={50}
          />
          <p className="font-semibold text-center">{cartItem.title}</p>
          <p className="font-semibold text-center">${cartItem.price}</p>
          <button
            className="border-2 rounded-md p-1 bg-purple-800 text-white"
            onClick={() => dispatch(removeFromCart(cartItem.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
