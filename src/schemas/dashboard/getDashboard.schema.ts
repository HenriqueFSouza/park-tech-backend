import z from "zod";

export const getDashboardSchema = z
  .object({
    period: z.enum(["week", "today", "month", "all"]).optional(),
  })
  .strict();
