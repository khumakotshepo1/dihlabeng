import { z } from "zod";
import { healthComplaintSchema } from "../schemas/health.schema";

export type HealthComplaintSchemaType = z.infer<typeof healthComplaintSchema>;
