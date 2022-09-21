import {Manage} from "./Manage";
import {Order} from "../Model/order";

export class ManageOrder implements Manage<Order> {
    listOfOrder: Order[] = []
    add(t: Order) {
        this.listOfOrder.push(t)
    }

    update(id: number, t: Order) {
    }

    remove(id: number) {
        let index = this.findByID(id)
        this.listOfOrder.splice(index,1)
    }

    findAll() {
        for (let i = 0; i < this.listOfOrder.length; i++) {
            console.log(`${this.listOfOrder[i].customer.name} , ${this.listOfOrder[i].display()}`)
        }
    }

    findByID(id: number) {
        for (let i = 0; i < this.listOfOrder.length; i++) {
            if (id == this.listOfOrder[i].id){
                return i
            }
        }
        return -1
    }
}