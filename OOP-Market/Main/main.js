"use strict";
exports.__esModule = true;
var ManageProduct_1 = require("../service/ManageProduct");
var ManageCustomer_1 = require("../service/ManageCustomer");
var ManageOrder_1 = require("../service/ManageOrder");
var product_1 = require("../Model/product");
var input = require("readline-sync");
var listProduct = new ManageProduct_1.ManageProduct();
var listCustomer = new ManageCustomer_1.ManageCustomer();
var listOfOrder = new ManageOrder_1.ManageOrder();
function mainMenu() {
    var menu = "-----------Main menu-----------\n        1.Manage products\n        2.Add new customer\n        3.Create order\n        4.Display orders";
    var choice;
    do {
        console.log(menu);
        choice = input.question('Your command \n');
        switch (choice) {
            case '1':
                productMenu();
                break;
            case '2':
                break;
            case '3':
                break;
            case '4':
                break;
        }
    } while (choice != 0);
}
function productMenu() {
    var menu = "-----Manage Product-----\n        1.Create\n        2.Remove\n        3.Edit\n        4.Display";
    var choice;
    do {
        console.log(menu);
        choice = input.question('Your command \n');
        switch (choice) {
            case '1':
                addProduct();
                break;
            case '2':
                removeProduct();
                break;
            case '3':
                break;
            case '4':
                console.log(listProduct.findAll());
                break;
        }
    } while (choice != 0);
}
function addProduct() {
    var id = input.question('Input item id ');
    var name = input.question('Input item name ');
    var quantity = input.question('Input item quantity ');
    var product = new product_1.Product(id, name, quantity);
    listProduct.add(product);
}
function removeProduct() {
    var id = input.question('To remove an item, insert its id');
    listProduct.remove(id);
}
mainMenu();
