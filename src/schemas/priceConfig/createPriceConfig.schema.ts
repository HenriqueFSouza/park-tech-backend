import z from "zod";

export const createPriceConfigSchema = z.object({
  firstHourPrice: z.number().min(2),
  additionalHourPrice: z.number().min(2),
});
