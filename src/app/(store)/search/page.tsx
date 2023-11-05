import Image from "next/image";
import Link from "next/link";

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">moletom</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/product/`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src="/moletom-never-stop-learning.png"
            alt="moletom"
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-h-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(189).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
        <Link
          href={`/product/`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src="/moletom-never-stop-learning.png"
            alt="moletom"
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-h-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(189).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
        <Link
          href={`/product/`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src="/moletom-never-stop-learning.png"
            alt="moletom"
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-h-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(189).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
        <Link
          href={`/product/`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src="/moletom-never-stop-learning.png"
            alt="moletom"
            width={480}
            height={480}
            quality={100}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-h-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(189).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
