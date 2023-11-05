import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface SkeletonProps extends ComponentProps<"div"> {}

export async function Skeleton({ className, ...rest }: SkeletonProps) {
  return (
    <div
      className={twMerge("bg-zinc-50/10 animate-pulse rounded-md", className)}
      {...rest}
    />
  );
}
