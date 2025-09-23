import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import WaitlistForm from "@/app/_components/miscellaneous/waitlist-form";

interface WaitlistPopupButtonProps {}

const WaitlistPopupButton: FC<WaitlistPopupButtonProps> = ({}) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "min-w-[145px]"
        )}
      >
        Join
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="!text-primary font-heading font-light text-tertiary-heading leading-normal tracking-normal text-center">
            Join Waitlist
          </DialogTitle>
        </DialogHeader>
        <WaitlistForm />
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistPopupButton;
