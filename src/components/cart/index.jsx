import React from "react";
import { useCartStore } from "../../hooks/useCart";

export function CartIcon() {
  const cart = useCartStore((state) => state.cart);

  return (
    <>
      <div className="position-relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-bag-fill"
          viewBox="0 0 16 16"
          style={{ position: "relative" }}
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
        </svg>
        <p
          style={{
            top: "17px",
            left: "12px",
            width: "25px",
            height: "25px",
            textAlign: "center",
            borderRadius: "50%",
          }}
          className="position-absolute top-10 start-10
          text-bg-warning pb-2"
        >
          {cart.length}
        </p>
      </div>
    </>
  );
}
