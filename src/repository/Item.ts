import { IItems } from "./IItems";

class Item implements IItems {
    private _uuid: string;
    public get uuid(): string {
        return this._uuid;
    }
    public set uuid(value: string) {
        this._uuid = value;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _qty: number;
    public get qty(): number {
        return this._qty;
    }
    public set qty(value: number) {
        this._qty = value;
    }

    constructor(_uuid: string, _name: string, _qty: number) {
        this._uuid = _uuid;
        this._name = _name;
        this._qty = _qty;
    }
}
export default Item;
