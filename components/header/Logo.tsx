"use client";

import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <span
      onClick={handleClick}
      className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500 cursor-pointer"
    >
      @itexpert120
    </span>
  );
}
