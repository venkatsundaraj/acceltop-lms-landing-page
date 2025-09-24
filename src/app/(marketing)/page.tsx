import { Icons } from "@/app/_components/miscellaneous/icons";
import { ScrollToHash } from "@/app/_components/miscellaneous/scroll-to-hash";
import WaitlistForm from "@/app/_components/miscellaneous/waitlist-form";
import WaitlistPopupButton from "@/app/_components/miscellaneous/waitlist-popup-button";
import { buttonVariants } from "@/app/_components/ui/button";
import { keyBenefitsSection, solutionData } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home({}: {}) {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollToHash />
      </Suspense>
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
              href={"/waitlist"}
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
        <div className="container flex flex-col items-center justify-center bg-primary  rounded-sm py-24 gap-16">
          <h2 className="text-secondary-heading font-heading leading-tight tracking-normal text-background font-normal max-w-prose">
            Solutions Designed for You
          </h2>
          <ul className="flex flex-wrap items-center justify-center w-full gap-3 md:gap-8 ">
            {Array.from(solutionData).map((item, i) => (
              <li
                key={i}
                className="items-center flex-col flex justify-center gap-2.5 p-3 md:p-6 bg-background rounded-sm min-h-[320px] max-w-[300px] md:max-w-[340px] w-full lg:max-w-[400px]"
              >
                <Image
                  className="w-full"
                  src={item.src}
                  alt={item.title}
                  width={300}
                  height={300}
                />
                <h4 className="text-tertiary-heading font-paragraph leading-normal tracking-normal text-foreground/60 font-semibold">
                  {item.title}
                </h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="w-full flex items-center justify-center py-8 bg-grid relative h-[unset] flex-col gap-16 px-3">
        <h2 className="text-secondary-heading font-heading leading-tight tracking-normal text-primary font-normal max-w-prose">
          Why Join Our Early Access Waitlist?
        </h2>
        <ul className="h-[340px] md:min-h-screen w-full flex flex-wrap md:flex-nowrap items-start justify-center gap-3 ">
          {Array.from(keyBenefitsSection).map((item, i) => {
            const Icon = Icons[item.icon];
            return (
              <li
                key={i}
                className="flex  w-full flex-col items-start gap-8 justify-center"
              >
                <div className="md:h-screen md:max-h-screen bg-primary w-full flex flex-col items-center rounded-sm justify-between p-4">
                  <div className="w-full flex items-center justify-center max-h-[75%] h-[75%] bg-background bg-grid rounded-sm p-4 ">
                    <Icon className="w-[70%] fill-primary stroke-1 " />
                  </div>
                  <div className="w-full flex items-center justify-end">
                    <span className="text-4xl md:text-5xl lg:text-7xl xl:text-[152px] text-background font-heading text-center ">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h4 className="text-subtitle-heading w-full font-heading leading-tight tracking-normal bg-transparent border border-primary text-primary min-h-[80px] rounded-sm flex items-center justify-center font-normal text-center max-w-prose">
                  {item.title}
                </h4>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="w-full flex items-center justify-center py-24 bg-grid relative overflow-hidden min-h-screen">
        <div className="container flex flex-col items-center justify-center gap-8 h-full">
          <h2 className="text-secondary-heading font-heading leading-tight tracking-normal text-primary font-normal max-w-prose">
            Join Waitlist
          </h2>
          <p className="text-paragraph-heading w-full font-paragraph leading-normal tracking-normal text-foreground/70 max-w-prose text-center">
            Join our exclusive waitlist and become a founding member of
            something big. Early access means premium features, special pricing,
            and the chance to test new tools before anyone else. Shape the
            platform with your insights and connect with our growing community.
            Sign up today for updates and a first look at what's coming.
          </p>

          <p className="text-paragraph-heading w-full font-paragraph leading-normal tracking-normal text-foreground/70 max-w-prose text-center">
            Sign up today for updates and a first look at what's coming.
          </p>

          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
