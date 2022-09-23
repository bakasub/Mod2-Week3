import {Manage} from "./Manage";
import {Product} from "../Model/Product";

export class ManageProduct implements Manage<Product> {
    public listProduct: Product[] = []

    add(t: Product) {
        this.listProduct.push(t)
    }

    update(id: number, t: Product) {
        let index = this.findById(id)
        this.listProduct[index] = t
    }

    remove(id: number) {
        let index = this.findById(id)
        this.listProduct.splice(index,1)
    }

    findAll() {
        return this.listProduct
    }

    findById(id: number) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (id== this.listProduct[i].id){
                return i
            }
        }
    }
}