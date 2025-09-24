import { FC } from "react";
import { Suspense } from "react";
import WaitlistForm from "@/app/_components/miscellaneous/waitlist-form";
import SearchParamsHandler from "@/app/_components/miscellaneous/search-params-handler";

interface pageProps {
  searchParams: Promise<{ q?: string }>;
}

const page: FC<pageProps> = ({ searchParams }) => {
  return (
    <section className="w-full flex items-center justify-center py-24 bg-grid relative overflow-hidden min-h-screen">
      <div className="container flex flex-col items-center justify-center gap-8 h-full">
        <h2 className="text-secondary-heading font-heading leading-tight tracking-normal text-primary font-normal max-w-prose">
          Join Waitlist
        </h2>
        <p className="text-paragraph-heading w-full font-paragraph leading-normal tracking-normal text-foreground/70 max-w-prose text-center">
          Join our exclusive waitlist and become a founding member of something
          big. Early access means premium features, special pricing, and the
          chance to test new tools before anyone else. Shape the platform with
          your insights and connect with our growing community. Sign up today
          for updates and a first look at what's coming.
        </p>

        <p className="text-paragraph-heading w-full font-paragraph leading-normal tracking-normal text-foreground/70 max-w-prose text-center">
          Sign up today for updates and a first look at what's coming.
        </p>

        <WaitlistForm />
      </div>
    </section>
  );
};

export default page;
