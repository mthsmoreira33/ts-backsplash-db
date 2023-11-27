import { orders } from "../database/orders";
import { clients } from "../database/clients";
import { Client } from "./Client";

type KindOfOrder = 'Bathroom Remodel' | 'Bathroom Installation' | 'Kitchen Backsplash';

export class Order {
    static #i: number = 0;
    private _orderID: string;

    constructor(private _kindOfOrder: KindOfOrder, private _date: Date) {
        this._orderID = String(Order.#i);
        Order.#i++;
        orders.push(this);
    }

    get orderID(): string {
        return this._orderID;
    }

    get kindOfOrder(): KindOfOrder {
        return this._kindOfOrder;
    }
}
