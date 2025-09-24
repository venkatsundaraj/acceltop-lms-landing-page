import Image from "next/image";
import { Icons } from "@/app/_components/miscellaneous/icons";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import WaitlistPopupButton from "@/app/_components/miscellaneous/waitlist-popup-button";
import { solutionData } from "@/config/marketing";

export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center py-24 bg-grid relative overflow-hidden">
        <div className="container flex flex-col items-center justify-center gap-2 z-10">
          <h1 className="text-primary-heading font-heading leading-tight tracking-normal text-primary font-normal max-w-prose">
            Transform How You Teach and Learn
          </h1>
          <p className="text-subtitle-heading font-paragraph leading-normal tracking-normal text-sidebar-ring font-semibold max-w-xl text-center">
            Discover new courses, connect with mentors, and start your learning
            adventure.
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
      <section className="w-full flex items-center justify-center py-24 bg-grid relative overflow-hidden">
        <div className="container flex flex-col items-center justify-center bg-primary  rounded-2xl py-24 gap-16">
          <h2 className="text-secondary-heading font-heading leading-tight tracking-normal text-background font-normal max-w-prose">
            Solutions Designed for You
          </h2>
          <ul className="flex flex-wrap items-center justify-center w-full gap-3 md:gap-8 ">
            {Array.from(solutionData).map((item, i) => (
              <li
                key={i}
                className="items-center flex-col flex justify-center gap-2.5 p-3 md:p-6 bg-background rounded-2xl min-h-[320px] max-w-[300px] md:max-w-[340px] w-full lg:max-w-[400px]"
              >
                <Image
                  className="w-full"
                  src={item.src}
                  alt={item.title}
                  width={300}
                  height={300}
                />
                <h4 className="text-tertiary-heading font-paragraph leading-normal tracking-normal text-foreground font-semibold">
                  {item.title}
                </h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
