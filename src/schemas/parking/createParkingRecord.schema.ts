import z from "zod";

export const createParkingRecordSchema = z.object({
  plate: z.string().min(5),
  model: z.string().min(3),
  color: z.string(),
});
