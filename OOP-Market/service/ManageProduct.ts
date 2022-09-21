import {Manage} from "./Manage";
import {Product} from "../Model/product";

export class ManageProduct implements Manage<Product> {
    listProduct: Product[] = []

    add(t: Product) {
        this.listProduct.push(t)
    }

    update(id: number, t: Product) {
        let location = this.findByID(id)
        this.listProduct[location] = t
    }

    remove(id: number) {
        let index = this.findByID(id)
        this.listProduct.splice(index,1)
    }

    findAll() {
        return this.listProduct
    }

    findByID(id: number) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (id == this.listProduct[i].id) {
                return i
            }
        }
        return -1
    }
}