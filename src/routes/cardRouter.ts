import { Router } from "express";
import getCardsCtr from "../controllers/cards/getCardsCtr.js";
import newCardCtr from "../controllers/cards/newCardCtr.js";
import newCardSchemaMd from "../middlewares/schemas/newCardSchemaMd.js";
import tokenBearerMd from "../middlewares/tokenBearerMd.js";

const cardRouter = Router();

cardRouter.post('/cards',tokenBearerMd,newCardSchemaMd,newCardCtr);
cardRouter.get('/cards',tokenBearerMd,getCardsCtr);


export default cardRouter;