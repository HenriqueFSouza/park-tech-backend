import z from "zod";

export const updateParkingRecordSchema = z.object({
  plate: z.string().min(5).optional(),
  model: z.string().min(3).optional(),
  color: z.string().optional(),
});
