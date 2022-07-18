import { Router } from "express";
import deleteCardCtr from "../controllers/cards/deleteCardsCtr.js";
import getCardsCtr from "../controllers/cards/getCardsCtr.js";
import newCardCtr from "../controllers/cards/newCardCtr.js";
import deleteCardSchemaMd from "../middlewares/schemas/deleteCardSchemaMd.js";
import newCardSchemaMd from "../middlewares/schemas/newCardSchemaMd.js";
import tokenBearerMd from "../middlewares/tokenBearerMd.js";

const cardRouter = Router();

cardRouter.post('/cards',tokenBearerMd,newCardSchemaMd,newCardCtr);
cardRouter.get('/cards',tokenBearerMd,getCardsCtr);
cardRouter.delete('/cards',tokenBearerMd,deleteCardSchemaMd,deleteCardCtr)


export default cardRouter;