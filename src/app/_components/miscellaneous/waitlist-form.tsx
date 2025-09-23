"use client";
import { FC } from "react";
import { Input } from "@/app/_components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EmailValidationSchema,
  emailValidator,
} from "@/lib/validation/email-validation";
import { Button } from "../ui/button";

interface WaitlistFormProps {}

const WaitlistForm: FC<WaitlistFormProps> = ({}) => {
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<EmailValidationSchema>({
    resolver: zodResolver(emailValidator),
  });

  const submitHandler = function (formData: EmailValidationSchema) {
    console.log(formData);
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col items-center justify-center gap-2"
    >
      <Input
        {...register("email")}
        autoCapitalize="none"
        autoComplete="off"
        type="email"
        disabled={isSubmitting}
        placeholder="Enter your Email"
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
