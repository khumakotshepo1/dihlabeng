"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CustomInput } from "@/components/custom-input";
import { HealthSchemaType } from "@/zod/zod/types/health.type";
import { healthSchema } from "@/zod/zod/schemas/health.schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Icons } from "@/components/icons";

export const ComplaintsForm = ({ health }: { health: HealthSchemaType[] }) => {
  const form = useForm<HealthSchemaType>({
    resolver: zodResolver(healthSchema), // Apply the zodResolver
  });
  console.log({ health });

  const { back, refresh } = useRouter();

  const processForm = async () => {

    const res = await fetch("/api/health", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.getValues()),
    });

    const data = await res.json();


    if (data.error) {
      console.log(data.error);
      toast.error(data.error);
    }

    if (data.success) {
      console.log(data.success);
      toast.success(data.success);
      setTimeout(() => {
        refresh();
        back();
      }, 2000);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(processForm)}
        className="space-y-8 lg:w-[500px] mx-auto p-8"
      >
        <div className="grid gap-2">
          <CustomInput
            control={form.control}
            name="name"
            label="Name"
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Health Care Name</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      console.log('Selected Health ID:', value);
                      field.onChange(value)
                    }}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full border-0 border-b-2 border-foreground dark:border-foreground rounded-none">
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      {health.map((item) => (
                        <SelectItem key={item.name} value={item.name}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-2">
          <CustomInput
            control={form.control}
            name="description"
            label="Description"
            placeholder="Description"
            type="textarea"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-2">
          <Button
            variant="secondary"
            disabled={form.formState.isSubmitting}
            type="submit"
            className="w-full"
          >
            {form.formState.isSubmitting ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Login"
            )}
          </Button>
        </div>
        <div className="mt-4 text-sm flex flex-col justify-start items-start py-3 gap-4">
          <div className="text-sm flex justify-center items-center gap-2">
            <p>Don&apos;t have an account?</p>
            <Link
              aria-label="Sign up"
              href="/auth/register"
              className="underline font-bold"
            >
              Register
            </Link>
          </div>
          <div className="text-sm flex justify-center items-center gap-2">
            <p>Forgot your password?</p>
            <Link
              aria-label="Reset password"
              href="/auth/reset-password"
              className="underline font-bold"
            >
              Reset Password
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};
