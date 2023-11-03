"use client";

import { useState, ReactNode } from "react";

export function AddToCartButton({ children = null }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  function addToCart() {
    setCount((state) => state + 1);
  }

  return (
    <div>
      <button type="button" onClick={addToCart}>
        Adicionar ao carrinho ({count})
      </button>

      {children}
    </div>
  );
}
