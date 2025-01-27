import { z } from "zod";

export const healthComplaintSchema = z.object({
  first_name: z.string().nonempty("First name is required"),
  last_name: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email address"),
  code: z.string().nonempty("Country code is required"),
  phone: z.string().regex(
    /^[+]*\d{1,4}[-\s]?\(?\d{1,4}?\)?[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,9}$/,
    "Phone number is invalid"
  ),
  name: z.string().nonempty("HealthCare name is required"),
  description: z.string().nonempty("Description is required"),
});
