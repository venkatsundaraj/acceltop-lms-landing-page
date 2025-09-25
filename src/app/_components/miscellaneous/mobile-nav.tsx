import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "../ui/button";
import NavigationMenu from "./navigation-menu";

interface MobileNavProps {
  items: string[];
  children?: React.ReactNode;
  removeHandler: () => void;
}

const MobileNav: FC<MobileNavProps> = ({}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 top-10 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 xl:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="flex flex-col items-center justify-center">
          {/* <NavigationMenu className="flex flex-col" /> */}
          <Link
            href={"/waitlist"}
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
