"use client";

import Link from "next/link";
import { RiFingerprintFill } from "react-icons/ri";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center pt-16">
      <div className="flex flex-col gap-1 md:gap-2 flex-wrap">
        <p className="text-7xl font-medium text-center">404</p>
        <p className="text-xl font-regular text-center">
          It seems you got a bit lost
        </p>
      </div>
      <Link
        href="/en"
        className="flex flex-col justify-center items-center gap-1 mt-10 cursor-pointer hover:text-[#ff6600] transition-colors"
      >
        <RiFingerprintFill className="size-10" />
        <p>Go back to homepage</p>
      </Link>
    </div>
  );
}
