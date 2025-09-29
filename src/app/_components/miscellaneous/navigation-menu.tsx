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
    <Menubar
      className={cn("bg-transparent border-none gap-1 md:gap-3", className)}
    >
      <MenubarMenu>
        <MenubarTrigger className="font-normal font-paragraph text-foreground text-[15px] leading-normal tracking-normal">
          Products
        </MenubarTrigger>
        <MenubarContent className="border-primary" side="bottom" align="end">
          <MenubarItem asChild className="p-0">
            <Link
              href={"https://acceltop-lms.vercel.app/"}
              target="_blank"
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal cursor-pointer"
            >
              <span className="hover:bg-[#3c96b4] hover:text-background w-full h-full p-1.5 rounded-sm">
                Kornea
              </span>
            </Link>
          </MenubarItem>

          <MenubarItem asChild className="p-0">
            <Link
              href={"https://orthomentors.ai/"}
              target="_blank"
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal cursor-pointer"
            >
              <span className="hover:bg-[#2563eb] hover:text-background w-full h-full p-1.5 rounded-sm">
                Orthomentors
              </span>
            </Link>
          </MenubarItem>
          <MenubarItem asChild className="p-0">
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal cursor-pointer"
            >
              <span className="hover:bg-[#fb8500] hover:text-background w-full h-full p-1.5 rounded-sm">
                SkillsPaedia
              </span>
            </Link>
          </MenubarItem>
          <MenubarItem asChild className="p-0">
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal cursor-pointer"
            >
              <span className="hover:bg-[#00b4d8] hover:text-background w-full h-full p-1.5 rounded-sm">
                AccelTop NXT
              </span>
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
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
              Online Courses
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              Mock Test
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              Branded Website
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              Question Bank
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              Flash Cards
            </Link>
          </MenubarItem>
          <MenubarItem asChild>
            <Link
              href={"/waitlist"}
              className="text-foreground font-paragraph text-[14px] font-normal leading-normal tracking-normal"
            >
              MCQs
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="font-normal font-paragraph text-foreground text-[15px] leading-normal tracking-normal">
          Solutions
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
