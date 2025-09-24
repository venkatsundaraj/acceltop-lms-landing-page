import { FC } from "react";
import Footer from "@/app/_components/miscellaneous/footer";
import Header from "@/app/_components/miscellaneous/header";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="w-screen min-h-screen flex flex-col items-start justify-center">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
