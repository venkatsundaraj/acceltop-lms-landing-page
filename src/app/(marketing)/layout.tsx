import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="w-screen min-h-screen flex flex-col items-start justify-center">
      {children}
    </main>
  );
};

export default layout;
