import Nezoter from "./Nezoter";
import fs from "fs";
import { resolve } from "path";

export default class Megoldas {
    private _székek: Array<Nezoter> = new Array<Nezoter>();

    public GetEladottArany(forrasf: string): string | null {
        let db: number = 0;
        let ossz: number = 0;
        for (let sor_index_ = 0, sor_source_ = forrasf; sor_index_ < sor_source_.length; sor_index_++) {
            const _székek = sor_source_[sor_index_];
            for (let karakter_index_ = 0, karakter_source_ = _székek; karakter_index_ < karakter_source_.length; karakter_index_++) {
                const _foglalt = karakter_source_[karakter_index_];
                if (_foglalt == "x") db++;
                ossz++;
            }
        }
        return String.Format(`Az előadásra eddig ${db} jegyet adtak el, ez a nézőtér ${<number>(<number>Math.round((db / ossz) * 100))} % -a.`);
    }

    public constructor(forrasf: string, forrask: string, s: number, sz: number, f: number, k: number, bal_foglalt: boolean, jobb_foglalt: boolean) {
        const fsorok: string[] = fs.readFileSync(forrasf).toString().split("\n");
        const ksorok: string[] = fs.readFileSync(forrask).toString().split("\n");
        for (let i = 0; i < fsorok.length; i++) {
            for (let j = 0; j < ksorok.length; j++) {
                if (fsorok[i].length != 0) {
                    this._székek.push(new Nezoter(s, sz, f, k, bal_foglalt, jobb_foglalt));
                }
            }
        }
    }
}
