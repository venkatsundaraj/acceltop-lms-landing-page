import { FC } from "react";
import Footer from "@/app/_components/miscellaneous/footer";
import Header from "@/app/_components/miscellaneous/header";
import { ScrollToHash } from "@/app/_components/miscellaneous/scroll-to-hash";
import { Toaster } from "@/app/_components/ui/sonner";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="w-screen min-h-screen flex flex-col items-start justify-center overflow-x-hidden">
      <Header />
      <Toaster />

      {children}
      <Footer />
    </main>
  );
};

export default layout;
