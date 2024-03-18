import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.send(401).end()
    }

    const [, token] = authToken.split(" ")

    try{
        const { sub } = verify(
            token,
            process.env.JWT_SECRETE
        ) as Payload;

        req.user_id = sub;

        return next();

    }catch(err){
        return res.status(401).end()
    }
}