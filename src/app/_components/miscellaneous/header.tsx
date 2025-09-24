import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "@/app/_components/ui/button";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header
      className={cn(
        "flex flex-row items-center justify-center gap-0 z-20  absolute top-0 w-screen  px-6 xl:px-14 py-6 ",
        true && "justify-center"
      )}
    >
      <div className=" container flex items-center justify-between">
        <Link
          href={"/"}
          className="text-tertiary-heading text-primary font-heading leading-normal tracking-normal "
        >
          AccelTop
        </Link>
        <nav className="flex items-center justify-center gap-3">
          <ul className="flex items-center justify-center gap-6">
            <li className="text-primary text-subtitle-heading leading-normal tracking-normal font-paragraph font-normal ">
              <Link href={"/pricing"}>Pricing</Link>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
