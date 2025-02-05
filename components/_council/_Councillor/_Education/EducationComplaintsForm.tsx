
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CountrySelect, CustomInput } from "@/components/custom-input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Icons } from "@/components/icons";
import { HealthComplaintSchemaType } from "@/zod/zod/types/health.type";
import { healthComplaintSchema } from "@/zod/zod/schemas/health.schema";
import { EducationCompProps } from "./education-api";

export const EducationComplaintsForm = ({ schools }: { schools: EducationCompProps[] }) => {
  const form = useForm<HealthComplaintSchemaType>({
    resolver: zodResolver(healthComplaintSchema), // Apply the zodResolver
  });

  const { back } = useRouter();

  const processForm = async (data: HealthComplaintSchemaType) => {
    const res = await fetch("/api/education/complaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.error) {
      console.log({ error: result.error });
      toast.error(result.error);
    }

    if (result.success) {
      console.log({ success: result.success });
      toast.success(result.success);
      setTimeout(() => {
        back();
      }, 2000);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(processForm)} className="space-y-8 lg:w-[500px] mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="sm:col-span-3">
            <CustomInput
              control={form.control}
              name="first_name"
              label="First Name"
              placeholder="John"
              type="text"
            />
          </div>
          <div className="sm:col-span-3">
            <CustomInput
              control={form.control}
              name="last_name"
              label="Last Name"
              placeholder="Doe"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            type="email"
          />
        </div>
        <div className="sm:col-span-3">
          <div className="mt-2 flex items-end">
            <CountrySelect name="code" control={form.control} label="Code" />
            <CustomInput name="phone" control={form.control} label="Phone" placeholder="+27112223333" type="tel" />
          </div>
        </div>
        <div className="sm:col-span-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>School</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      console.log("Selected Health ID:", value);
                      field.onChange(value);
                    }}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full border-0 border-b-2 border-foreground dark:border-foreground rounded-none">
                      <SelectValue placeholder="Select School" />
                    </SelectTrigger>
                    <SelectContent>
                      {schools.map((item) => (
                        <SelectItem key={item.school_name} value={item.school_name}>
                          {item.school_name}
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

        <div className="sm:col-span-3">
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
            variant="destructive"
            disabled={form.formState.isSubmitting}
            type="submit"
            className="w-full"
          >
            {form.formState.isSubmitting ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Report"
            )}
          </Button>
          <Button
            variant={"secondary"}
            className="w-full"
            onClick={() => back()} // This will trigger the back navigation
          >
            Back
          </Button>
        </div>
      </form>
    </Form>
  );
};
