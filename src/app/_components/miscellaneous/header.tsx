"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, useState } from "react";
import { buttonVariants } from "@/app/_components/ui/button";
import NavigationMenu from "@/app/_components/miscellaneous/navigation-menu";
import { useSelectedLayoutSegment } from "next/navigation";
import { Icons } from "./icons";
import MobileNav from "./mobile-nav";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const segment = useSelectedLayoutSegment();
  return (
    <header
      className={cn(
        "flex flex-row items-center justify-center gap-0 z-20 absolute top-0 w-screen px-1 md:px-6 xl:px-14 py-6 ",
        true && "justify-center"
      )}
    >
      <div className=" flex items-center container justify-between">
        <Link
          href={"/"}
          className="text-tertiary-heading text-primary font-heading  leading-normal tracking-normal "
        >
          AccelTop
        </Link>

        <nav className="flex items-center justify-center gap-3">
          <NavigationMenu className="" />
          <ul className="hidden items-center justify-center gap-3 md:flex ">
            <li className="text-background text-subtitle-heading leading-normal tracking-normal font-paragraph font-normal ">
              <Link
                href={"/waitlist"}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "hover:no-underline text-foreground font-normal leading-normal tracking-normal font-paragraph"
                )}
              >
                Pricing
              </Link>
            </li>
            <li className="text-background text-subtitle-heading leading-normal tracking-normal font-paragraph font-normal ">
              <Link
                href={"/waitlist"}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" })
                )}
              >
                Get Started
              </Link>
            </li>
          </ul>

          <button
            className="hidden items-center space-x-2 xl:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <Icons.CircleX className="text-foreground" />
            ) : (
              <Icons.Menu className="text-foreground" />
            )}
            <span className="font-bold hidden">Menu</span>
          </button>
          {showMobileMenu && (
            <MobileNav
              removeHandler={() => setShowMobileMenu(!showMobileMenu)}
              items={["hello"]}
            />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
