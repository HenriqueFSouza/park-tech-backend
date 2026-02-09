import z from "zod";

export const getQuerParkingRecordSchema = z
  .object({
    search: z.string().optional(),
    status: z.enum(["ACTIVE", "FINISHED"]).optional(),
  })
  .strict();
