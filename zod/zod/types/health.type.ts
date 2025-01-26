import { z } from "zod";
import { healthSchema } from "../schemas/health.schema";

export type HealthSchemaType = z.infer<typeof healthSchema>;
