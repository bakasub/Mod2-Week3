"use strict";
exports.__esModule = true;
var Product_1 = require("../Model/Product");
var ManageProduct_1 = require("../Service/ManageProduct");
var input = require('readline-sync');
var listProduct = new ManageProduct_1.ManageProductX();
function mainMenu() {
    var menu = "\t Main menu\n    1.Display list of products\n    2.Search product by name\n    3.Create a new product\n    4.Edit a product information\n    5.Remove a product\n    0.Exit\n    ";
    var choice;
    console.log(menu);
    do {
        choice = input.question("Choose an action\n");
        switch (choice) {
            case '1':
                listProduct.displayFiveTimes();
                break;
            case '2':
                display();
                break;
            case '3':
                addProduct();
                break;
            case '4':
                updateProduct();
                break;
            case '5':
                removeProduct();
                break;
        }
    } while (choice != 0);
}
function display() {
    var name = input.question("Insert name");
    listProduct.filterByName(name);
}
function addProduct() {
    console.log(listProduct.listProduct.length);
    var code = input.question("Input code\n");
    //name
    var name = input.question("Input product name \n");
    if (name == null) {
        console.log("Invalid data");
        mainMenu();
    }
    //type
    var menu = "1.Heavy type \n 2.Fragile type";
    var type = input.question("Input type of product \n");
    if (type != 1 && type != 2) {
        console.log("Invalid data");
        mainMenu();
    }
    //price
    var price = input.question("Input price\n");
    if (price < 0) {
        console.log("Invalid data");
        mainMenu();
    }
    //quantity
    var quantity = input.question("Input quantity\n");
    if (quantity < 0) {
        console.log("Invalid data\n");
        mainMenu();
    }
    var description = input.question("Input product description\n");
    var createDate = input.question("Input date\n");
    //Product
    var product = new Product_1.Product(code, name, type, price, quantity, createDate, description);
    listProduct.addProduct(product);
}
function updateProduct() {
    var code = input.question("Input product code\n");
    if (code < 0 || code > this.listProduct.length) {
        console.log("Product doesnt exist");
    }
    var name = input.question("Input product name \n");
    var type = input.question("Input type\n");
    var price = input.question("Input price \n");
    var quantity = input.question("Input quantity\n");
    var createDate = input.question("Input create date");
    var description = input.question("Input product description");
    var editedProduct = new Product_1.Product(code, name, type, price, quantity, createDate, description);
    listProduct[this.listProduct.findByCode(code)] = editedProduct;
}
function removeProduct() {
    var code = input.question("Input code to remove product");
    listProduct.removeProduct(code);
}
mainMenu();
