import Link from "next/link";
import { FC } from "react";
import { Icon, Icons } from "./icons";

interface FooterProps {}

const socialMediaIcons: Icon[] = ["Mail", "Twitter", "WhatsApp", "Instagram"];

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="w-full flex items-center justify-center bg-primary py-24">
      <div className="container flex items-center justify-between">
        <span className="text-3xl md:text-3xl lg:text-4xl xl:text-[152px] text-background font-heading leading-normal tracking-normal ">
          AccelTop
        </span>
        <div className="bg-background h-[300px] w-0.5" />
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center gap-16">
            <ul className="grid grid-cols-2 items-center justify-center gap-6 w-[320px] md:w-[440px]">
              {Array.from(socialMediaIcons).map((item, i) => {
                const Icon = Icons[item];
                return (
                  <li key={i} className="w-full items-center justify-center">
                    <Link href={"mailto:varamsortho@gmail.com"}>
                      <Icon className="fill-background w-24 h-24 stroke-background" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
