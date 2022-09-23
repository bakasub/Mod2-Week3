import {Product} from "../Model/Product";
import {ManageProductX} from "../Service/ManageProduct";

let input = require('readline-sync')
let listProduct: ManageProductX = new ManageProductX()

function mainMenu() {
    let menu = `\t Main menu
    1.Display list of products
    2.Search product by name
    3.Create a new product
    4.Edit a product information
    5.Remove a product
    0.Exit
    `
    let choice;
    console.log(menu)
    do {
        choice = input.question(`Choose an action`)
        switch (choice) {
            case '1' :
                listProduct.displayFiveTimes()
                break;
            case '2':
                display()
                break;
            case '3':
                addProduct()
                break;
            case '4':
                updateProduct()
                break;
            case '5':
                removeProduct()
                break;
        }

    } while (choice != 0)
}

function display() {
    let name = input.question(`Insert name`)
    listProduct.filterByName(name)
}

function addProduct() {
    let code = (this.listProduct.length + 1)
    //name
    let name = input.question(`Input product name \n`)
    if (name == null) {
        console.log(`Invalid data`)
        mainMenu()
    }
    //type
    let menu = `1.Heavy type \n 2.Fragile type`
    let type = input.question(`Input type of product \n`)
    if (type != 1 && type != 2) {
        console.log(`Invalid data`)
        mainMenu()
    }
    //price
    let price = input.question(`Input price\n`)
    if (price < 0) {
        console.log(`Invalid data`)
        mainMenu()
    }
    //quantity
    let quantity = input.question(`Input quantity\n`)
    if (quantity < 0) {
        console.log(`Invalid data\n`)
        mainMenu()
    }
    let description = input.question(`Input product description\n`)
    let createDate = input.question(`Input date\n`)
    //Product
    let product = new Product(code, name, type, price, quantity, createDate, description)
    listProduct.addProduct(product)
}

function updateProduct() {
    let code = input.question(`Input product code\n`)
    if (code < 0 || code > this.listProduct.length) {
        console.log(`Product doesnt exist`)
    }
    let name = input.question(`Input product name \n`)
    let type = input.question(`Input type\n`)
    let price = input.question(`Input price \n`)
    let quantity = input.question(`Input quantity\n`)
    let createDate = input.question(`Input create date`)
    let description = input.question(`Input product description`)
    let editedProduct = new Product(code,name,type,price,quantity,createDate,description)
    listProduct[this.listProduct.findByCode(code)] = editedProduct
}

function removeProduct() {
    let code = input.question(`Input code to remove product`)
    listProduct.removeProduct(code)
}

mainMenu()