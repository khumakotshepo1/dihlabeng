import { z } from "zod";

export const healthSchema = z.object({
  name: z.string(),
  description: z.string(),
  ward: z.number(),
});

