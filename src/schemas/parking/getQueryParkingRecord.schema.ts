import z from "zod";

export const getQuerParkingRecordSchema = z
  .object({
    search: z.string().optional(),
  })
  .strict();
