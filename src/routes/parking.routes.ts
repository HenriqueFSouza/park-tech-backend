import { Router } from "express";
import CreateParkingRecordController from "../controllers/parking/CreateParkingRecordController";
import ExitParkingRecordController from "../controllers/parking/ExitParkingRecordController";
import GetParkingRecordsController from "../controllers/parking/GetParkingRecordsController";
import UpdateParkingRecordController from "../controllers/parking/UpdateParkingRecordController";
import { validateAuth } from "../middlewares/validateAuth";
import { validateQuerySchema } from "../middlewares/validateQuerySchema";
import { validateSchema } from "../middlewares/validateSchema";
import { createParkingRecordSchema } from "../schemas/parking/createParkingRecord.schema";
import { getQuerParkingRecordSchema } from "../schemas/parking/getQueryParkingRecord.schema";
import { updateParkingRecordSchema } from "../schemas/parking/updateParkingRecord.schema";

const router = Router();

router.post(
  "/parking",
  validateAuth,
  validateSchema(createParkingRecordSchema),
  CreateParkingRecordController.handle,
);

router.post(
  "/parking/:id/exit",
  validateAuth,
  ExitParkingRecordController.handle,
);

router.put(
  "/parking/:id",
  validateAuth,
  validateSchema(updateParkingRecordSchema),
  UpdateParkingRecordController.handle,
);

router.get(
  "/parking",
  validateAuth,
  validateQuerySchema(getQuerParkingRecordSchema),
  GetParkingRecordsController.handle,
);

export default router;
