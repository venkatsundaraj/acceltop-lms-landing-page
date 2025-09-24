"use client";
import { FC, use } from "react";
import { Input } from "@/app/_components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EmailValidationSchema,
  emailValidator,
} from "@/lib/validation/email-validation";
import { Button } from "@/app/_components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {}

const WaitlistForm: FC<WaitlistFormProps> = ({}) => {
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
    reset,
  } = useForm<EmailValidationSchema>({
    resolver: zodResolver(emailValidator),
  });

  const submitHandler = async function (formData: EmailValidationSchema) {
    try {
      const data = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(data);

      if (data) {
        toast("Your profile has been updated.");
        return reset();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={cn("flex flex-col items-center justify-center gap-2")}
    >
      <Input
        {...register("email")}
        autoCapitalize="none"
        autoComplete="off"
        type="email"
        disabled={isSubmitting}
        placeholder="Enter your Email"
        className="min-w-xl"
        required
      />
      {errors?.email ? (
        <p className="px-1 text-xs text-destructive h-4">
          {errors.email.message}
        </p>
      ) : (
        <p className="h-4"></p>
      )}
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default WaitlistForm;
