import { Router } from "express";
import newWirelessCtr from "../controllers/wireless/newWirelessCtr.js";
import newWirelessSchemaMd from "../middlewares/schemas/wireless/newWirelessSchemaMd.js";
import tokenBearerMd from "../middlewares/tokenBearerMd.js";

const wirelessRouter = Router();

wirelessRouter.post('/wireless',tokenBearerMd,newWirelessSchemaMd,newWirelessCtr)

export default wirelessRouter;