import Image from "next/image";
import Link from "next/link";

import { api } from "@/data/api";
import { Product } from "@/data/types/product";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured");

  const products = await response.json();

  return products;
}

export default async function HomePage() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src={highlightedProduct.image}
          alt="moletom"
          width={860}
          height={860}
          quality={100}
        />

        <div className="absolute bottom-20 right-20 h-12 flex items-center gap-2 max-h-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src={product.image}
            alt="moletom"
            width={860}
            height={860}
            quality={100}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-h-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
