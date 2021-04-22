export default class Nezoter {
    public _sor: number = 0;
    public _székSzáma: number = 0;
    public _foglalt: boolean = false;
    public _kategória: number = 0;
    public _szingli: boolean = false;

    public get sor(): number {
        return this._sor;
    }

    public get székSzáma(): number {
        return this._székSzáma;
    }

    public get foglalt(): boolean {
        return this._foglalt;
    }

    public get kategória(): number {
        return this._kategória;
    }

    public get szingli(): boolean {
        return this._szingli;
    }

    constructor(s: number, sz: number, f: number, k: number, bal_foglalt: boolean, jobb_foglalt: boolean) {
        this._sor = s;
        this._székSzáma = sz;
        this._foglalt = f == "x".charCodeAt(0);
        this._kategória = parseInt(k.toString());
        this._szingli = !this._foglalt && bal_foglalt && jobb_foglalt;
    }
    public getÁr(): number {
        return this._kategória == 5 ? 1500 : 6000 - 1000 * this._kategória;
    }
    public get Szabad(): string {
        return this._foglalt ? "x" : this._kategória.toString();
    }
}
