import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/app/_components/ui/menubar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface NavigationMenuProps {
  className?: string;
}

const NavigationMenu: FC<NavigationMenuProps> = ({ className }) => {
  return (
    <Menubar className={cn("bg-transparent border-none gap-3", className)}>
      <MenubarMenu>
        <MenubarTrigger className="font-normal font-paragraph text-foreground text-[15px] leading-normal tracking-normal">
          Products
        </MenubarTrigger>
        <MenubarContent className="border-primary" side="bottom" align="end">
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              Kornea
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              Orthomentors
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              SkillsPaedia
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              AccelTop NXT
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="font-normal font-paragraph text-foreground text-[15px] leading-normal tracking-normal">
          Modules
        </MenubarTrigger>
        <MenubarContent className="border-primary" side="bottom" align="end">
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              NEET
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              UPSC
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              CA
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              GATE
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              INISET
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              MRB
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default NavigationMenu;
