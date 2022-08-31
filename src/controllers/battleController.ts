import { Request, Response } from "express";
import * as battleService from "../services/battleService"

export async function battle(req: Request, res: Response){
    const {firstUser, secondUser} : {firstUser: string, secondUser: string} = req.body;

    if(!firstUser || !secondUser){
        return res.sendStatus(422);
    }

    const resultBattle = await battleService.battle(firstUser, secondUser);
    res.send(resultBattle)
}