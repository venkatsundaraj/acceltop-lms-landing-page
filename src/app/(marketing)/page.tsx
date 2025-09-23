import Image from "next/image";
import { Icons } from "@/app/_components/miscellaneous/icons";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import WaitlistPopupButton from "@/app/_components/miscellaneous/waitlist-popup-button";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-24 bg-grid relative overflow-hidden">
      <div className="container flex flex-col items-center justify-center gap-2 z-10">
        <h1 className="text-primary-heading font-heading leading-tight tracking-normal text-primary font-normal max-w-prose">
          Transform How You Teach and Learn
        </h1>
        <p className="text-subtitle-heading font-paragraph leading-normal tracking-normal text-sidebar-ring font-semibold max-w-2xl text-center">
          Discover new courses, connect with mentors, and start your learning
          adventure. Enter your email for exclusive early updates.
        </p>
        <div className="flex items-center justify-center gap-8 mt-4">
          <Link
            href={"/"}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "min-w-[145px]"
            )}
          >
            Explore
          </Link>
          <WaitlistPopupButton />
        </div>
      </div>
      <div className="absolute w-full h-full">
        <Icons.BgConicalFlask className="w-24 absolute top-1/6 left-[20px] fill-primary/40 " />
        <Icons.BgGrpah className="w-24 absolute -top-[120px] left-2/3 fill-primary/40 rotate-12" />
        <Icons.BgGraduation className="w-24 absolute top-2/6 right-0 fill-primary/60" />
        <Icons.BgPen className="w-24 absolute top-4/6 left-4/5 fill-primary/60 animate-pulse" />
        <Icons.BgBook className="w-24 absolute top-1/6 left-1/12 fill-primary/60 animate-pulse" />
        <Icons.BgPieChart className="w-24 absolute top-8/12 left-2/5 fill-primary/60 animate-pulse" />
      </div>
    </section>
  );
}
