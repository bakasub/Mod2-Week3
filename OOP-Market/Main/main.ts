import {ManageProduct} from "../service/ManageProduct";
import {ManageCustomer} from "../service/ManageCustomer";
import {ManageOrder} from "../service/ManageOrder";
import {Product} from "../Model/product";
import {Customer} from "../Model/customer";
import {Order} from "../Model/order";

let input = require(`readline-sync`)
let listProduct: ManageProduct = new ManageProduct()
let listCustomer: ManageCustomer = new ManageCustomer()
let listOfOrder: ManageOrder = new ManageOrder()

function mainMenu() {
    let menu =
        `-----------Main menu-----------
        1.Manage products
        2.Add new customer
        3.Create order
        4.Display orders`
    let choice;
    do {
        console.log(menu)
        choice = input.question('Your command \n')
        switch (choice) {
            case '1':
                productMenu();
                break;
            case '2':
                createCustomer()
                break;
            case '3':
                placeOrder()
                break;
            case '4':
                listOfOrder.findAll()
                break;

        }
    } while (choice != 0)
}

function productMenu() {
    let menu =
        `-----Manage Product-----
        1.Create
        2.Remove
        3.Edit
        4.Display`
    let choice;
    do {
        console.log(menu)
        choice = input.question('Your command \n')
        switch (choice) {
            case '1':
                addProduct()
                break;
            case '2':
                removeProduct()
                break;
            case '3':
                editProduct()
                break;
            case '4':
                console.log(listProduct.findAll())
                break;

        }
    } while (choice != 0)
}

function addProduct() {
    let id = input.question('Input item id ')
    let name = input.question('Input item name ')
    let quantity = input.question('Input item quantity ')
    let product = new Product(id, name, quantity)

    listProduct.add(product)

}

function removeProduct() {
    let id = input.question('To remove an item, insert its id ')
    listProduct.remove(id)
}

function editProduct() {
    let id = input.question('Input the item to be edited')
    let name = input.question('Input new name')
    let quantity = input.question('Input new quantity')
    let editedProduct = new Product(id, name, quantity)
    listProduct.update(id, editedProduct)
}

function createCustomer() {
    let id = input.question('Input customer id')
    let name = input.question('Input customer name')
    let customer = new Customer(id, name)
    listCustomer.add(customer)
}

function placeOrder() {
    let idCustomer = input.question('Input customer id')
    let idOrder = input.question('Input order id')
    for (let i = 0; i < listProduct.listProduct.length; i++) {
        console.log(`id: ${listProduct.listProduct[i].id}, name: ${listProduct.listProduct[i].name}, quantity: ${listProduct.listProduct[i].quantity}`);
    }
    let idProduct = input.question('Input product id')
    let amount = input.question('Input buying amount')
    let product = listProduct.listProduct[listProduct.findByID(idProduct)]
    listProduct.update(idProduct, new Product(product.id, product.name, (product.quantity - amount)));

    let customer = listCustomer.customerList[listCustomer.findByID(idCustomer)]
    let order = new Order(idOrder, customer)
    order.addProduct(product)
    this.listOfOrder.add(order)
}

mainMenu()