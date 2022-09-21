import {Customer} from "./customer";
import {Product} from "./product";

export class Order {
    private _id: number;
    private _customer: Customer;
    public cart: Product[] = [];


    constructor(id: number, customer: Customer) {
        this._id = id;
        this._customer = customer;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get customer(): Customer {
        return this._customer;
    }

    set customer(value: Customer) {
        this._customer = value;
    }

    addProduct(newProduct: Product) {
        this.cart.push(newProduct)
    }

    display(){
        return this.cart
    }
}