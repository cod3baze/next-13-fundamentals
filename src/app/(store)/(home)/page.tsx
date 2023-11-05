import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/moletom-ai-side.png"
          alt="moletom"
          width={860}
          height={860}
          quality={100}
        />

        <div className="absolute bottom-20 right-20 h-12 flex items-center gap-2 max-h-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129.00
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/moletom-java.png"
          alt="moletom"
          width={860}
          height={860}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-h-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Java</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 283.00
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/camiseta-dowhile-2022.png"
          alt="moletom"
          width={860}
          height={860}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-h-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 340.75
          </span>
        </div>
      </Link>
    </div>
  );
}
