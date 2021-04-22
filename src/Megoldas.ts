import Nezoter from "./Nezoter";
import fs from "fs";
import { resolve } from "path";

export default class Megoldas {
    private _székek: Array<Nezoter> = new Array<Nezoter>();

    public constructor(forrasf: string, forrask: string, s: number, sz: number, f: number, k: number, bal_foglalt: boolean, jobb_foglalt: boolean) {
        const fsorok: string[] = fs.readFileSync(forrasf).toString().split("\n");
        const ksorok: string[] = fs.readFileSync(forrask).toString().split("\n");
        for (let i = 1; i < fsorok.length; i++) {
            if (fsorok[i].length != 0) {
                this._székek.push(new Nezoter(s, sz, f, k, bal_foglalt, jobb_foglalt));
            }
        }
    }
}
