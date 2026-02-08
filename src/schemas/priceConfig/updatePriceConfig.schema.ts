import z from "zod";

export const updatePriceConfigSchema = z.object({
  firstHourPrice: z.number().min(2).optional(),
  additionalHourPrice: z.number().min(2).optional(),
  isActive: z.boolean().optional(),
});
