import { Router } from "express";
import deleteWirelessCtr from "../controllers/wireless/deleteWirelessCtr.js";
import getWirelessCtr from "../controllers/wireless/getWirelessCtr.js";
import newWirelessCtr from "../controllers/wireless/newWirelessCtr.js";
import deleteCardSchemaMd from "../middlewares/schemas/deleteCardSchemaMd.js";
import newWirelessSchemaMd from "../middlewares/schemas/wireless/newWirelessSchemaMd.js";
import tokenBearerMd from "../middlewares/tokenBearerMd.js";

const wirelessRouter = Router();

wirelessRouter.post('/wireless',tokenBearerMd,newWirelessSchemaMd,newWirelessCtr);
wirelessRouter.get('/wireless',tokenBearerMd,getWirelessCtr);
wirelessRouter.delete('/wireless',tokenBearerMd,deleteCardSchemaMd,deleteWirelessCtr);

export default wirelessRouter;