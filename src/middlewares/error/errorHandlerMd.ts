import { NextFunction, Request, Response, ErrorRequestHandler} from "express";

function errorHandlerMd(error:any,req:Request,res:Response,next:NextFunction) {
    console.log(error)
    if(error.type=='schema_validation') {
        return res.sendStatus(501)
    }
    return res.sendStatus(500)
}

export default errorHandlerMd;