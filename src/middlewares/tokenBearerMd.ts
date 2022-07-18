import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { Token } from '../interfaces/auth.js';
import "dotenv/config";

function tokenBearerMd(req:Request, res:Response, next:NextFunction) {

  const { authorization } = req.headers;
   if (!authorization) {
    throw {type:"token_error", message: "Token is necessary."
  };
}
const token = authorization.split(' ')[1];

  if (authorization.slice(0, 7) !== 'Bearer ') {
    throw {type:"token_error" , message: 'Invalid authorization format'
    };
  }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded:Token) => {
        if(error) {
            throw {type:"token_error",message:"Invalid or expired token!"}
        }
        return res.locals.user_id = decoded
    });

    next();
 
  }

export default tokenBearerMd;