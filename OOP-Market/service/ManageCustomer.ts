import {Manage} from "./Manage";
import {Customer} from "../Model/customer";

export class ManageCustomer implements Manage<Customer> {
    customerList: Customer[] = []

    add(customer) {
        this.customerList.push(customer)
    }

    update(id: number, t: Customer) {

    }

    remove(id: number) {
        let index = this.findByID(id)
        this.customerList.splice(index, 1)
    }

    findAll() {

    }

    findByID(id: number) {
        for (let i = 0; i < this.customerList.length; i++) {
            if (this.customerList[i].id == id) {
                return i
            }

        }
        return -1
    }

    findProductById(id: number){
        
    }
}