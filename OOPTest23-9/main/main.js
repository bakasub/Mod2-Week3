"use strict";
exports.__esModule = true;
var ManageProduct_1 = require("../Service/ManageProduct");
var input = require('readline-sync');
var listProduct = new ManageProduct_1.ManageProductX();
function mainMenu() {
    var menu = "\t Main menu\n    1.Display list of products\n    2.Search product by name\n    3.Create a new product\n    4.Edit a product information\n    5.Remove a product\n    0.Exit\n    ";
    var choice;
    console.log(menu);
    do {
        choice = input.question("Choose an action");
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
    var name = input.question("Input product name");
    if (name == null) {
        console.log("Invalid data");
        mainMenu();
    }
    var menu = "1.Heavy type \n 2.Fragile type";
    var type = input.question("Input type of product");
    if (type != 1 && type != 2) {
        console.log("Invalid data");
        mainMenu();
    }
}
function removeProduct() {
    var code = input.question("Input code to remove product");
    listProduct.removeProduct(code);
}
mainMenu();
