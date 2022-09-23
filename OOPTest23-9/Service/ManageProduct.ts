import {Product} from "../Model/Product";

export class ManageProductX {
    listProduct: Product[] = []

    displayFiveTimes() {
        if (this.listProduct.length == 0) {
            console.log(`No data`)
        } else {
            for (let i = 0; i < 5; i++) {
                console.log(this.listProduct[i])
            }
        }
    }

    filterByName(name) {
        let filteredItems = []
        for (let i = 0; i < this.listProduct.length; i++) {
            if (name == this.listProduct[i].name) {
                filteredItems.push(this.listProduct[i])
            }
        }
        if (filteredItems.length == 0) {
            console.log(`No matching data`)
        } else {
            console.log(filteredItems)
        }

    }

    addProduct(product: Product){
        this.listProduct.push(product)
    }


    removeProduct(code) {
        const itemCount = this.listProduct.length
        for (let i = 0; i < this.listProduct.length; i++) {
            if (code == this.listProduct[i].code) {
                this.listProduct.splice(i, 1)
                console.log(`Product removed`)
            }
        }
        if (itemCount == this.listProduct.length){
            `The input code doesnt exist`
        }
    }

    findByCode(code){
        for (let i = 0; i < this.listProduct.length; i++) {
            if(code == this.listProduct[i]){
                return i
            }

        }
    }
}