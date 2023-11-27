import { clients } from "../database/clients";
import { orders } from "../database/orders";
import { Order } from "./Order";

export type State = 'SC' | 'CA'

export class Client {
    private _orders: Order[] = [];

    constructor(private _clientName: string, private _telephoneNum: string, private _email: string,  private _state: State) {
        clients.push(this);
    }

    get clientName(): string {
        return this._clientName;
    }

    get telephoneNum() : string {
        return this._telephoneNum;
    }

    get email(): string {
        return this._email;
    }

    get state(): State {
        return this._state;
    }

    set clientName(newClientName: string) {
        this._clientName = newClientName;
    }

    set telephoneNum(newTelephoneNum: string) {
        this._telephoneNum = newTelephoneNum;
    }

    set email(newEmail: string) {
        this._email = newEmail;
    }

    set state(newState: State) {
        this._state = newState;
    }

    addOrder(order: Order): void {
        this._orders.push(order);
    }

    removeOrder(order: Order): void {
        const index = this._orders.indexOf(order);
        if (index !== -1) {
            this._orders.splice(index, 1);
        }
    }
}

