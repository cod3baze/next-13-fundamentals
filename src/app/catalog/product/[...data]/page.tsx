import { AddToCartButton } from "./add-to-cart-button";
import { Test } from "./test";

interface ProductProps {
  params: {
    data: string[];
  };
}

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data;

  return (
    <div>
      <p>Product {productId}</p>
      <p>size {size}</p>
      <p>color {color}</p>

      <AddToCartButton>
        <Test />
      </AddToCartButton>
    </div>
  );
}
