"use strict";
exports.__esModule = true;
exports.ManageProductX = void 0;
var ManageProductX = /** @class */ (function () {
    function ManageProductX() {
        this.listProduct = [];
    }
    ManageProductX.prototype.displayFiveTimes = function () {
        if (this.listProduct.length == 0) {
            console.log("No data");
        }
        else {
            for (var i = 0; i < 5; i++) {
                console.log(this.listProduct[i]);
            }
        }
    };
    ManageProductX.prototype.filterByName = function (name) {
        var filteredItems = [];
        for (var i = 0; i < this.listProduct.length; i++) {
            if (name == this.listProduct[i].name) {
                filteredItems.push(this.listProduct[i]);
            }
        }
        if (filteredItems.length == 0) {
            console.log("No matching data");
        }
        else {
            console.log(filteredItems);
        }
    };
    ManageProductX.prototype.addProduct = function (product) {
        this.listProduct.push(product);
    };
    ManageProductX.prototype.removeProduct = function (code) {
        var itemCount = this.listProduct.length;
        for (var i = 0; i < this.listProduct.length; i++) {
            if (code == this.listProduct[i].code) {
                this.listProduct.splice(i, 1);
                console.log("Product removed");
            }
        }
        if (itemCount == this.listProduct.length) {
            "The input code doesnt exist";
        }
    };
    ManageProductX.prototype.findByCode = function (code) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (code == this.listProduct[i]) {
                return i;
            }
        }
    };
    return ManageProductX;
}());
exports.ManageProductX = ManageProductX;
