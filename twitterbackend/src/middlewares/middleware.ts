import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { PrismaClient, User } from '@prisma/client'

const JWT_SECRET = 'SUPER SECRET';
const prisma = new PrismaClient()

type AuthRequest = Request & { user?: User }

export async function authenticationToken(
    req: AuthRequest,
    res: Response,
    next: NextFunction
) {

    const authHeader = req.headers['authorization'];
    const jwtToken = authHeader?.split(' ')[1];
    if (!jwtToken) {
        return res.sendStatus(401)
    }

    // Decode the jwt token
    try {
        const payload = (await jwt.verify(jwtToken, JWT_SECRET)) as {
            tokenId: number;
        }
        const dbToken = await prisma.token.findUnique({
            where: { id: payload.tokenId },
            include: { user: true }
        })

        if (!dbToken?.valid || dbToken.expiration < new Date()) {
            return res.status(401).json({ error: "API token expired" })
        }

        // console.log(dbToken.user);
        req.user = dbToken.user;

    } catch (error) {
        return res.sendStatus(401)
    }

    next();

}