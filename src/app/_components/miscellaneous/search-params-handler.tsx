"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import WaitlistForm from "@/app/_components/miscellaneous/waitlist-form";

interface pageProps {
  className?: string;
}
export default function SearchParamsHandler({ className }: pageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <WaitlistForm className={className} /> */}
    </Suspense>
  );
}
