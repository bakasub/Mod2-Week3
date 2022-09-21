"use strict";
exports.__esModule = true;
exports.ManageProduct = void 0;
var ManageProduct = /** @class */ (function () {
    function ManageProduct() {
        this.listProduct = [];
    }
    ManageProduct.prototype.add = function (t) {
        this.listProduct.push(t);
    };
    ManageProduct.prototype.update = function (id, t) {
    };
    ManageProduct.prototype.remove = function (id) {
        var index = this.findByID(id);
        this.listProduct.splice(index, 1);
    };
    ManageProduct.prototype.findAll = function () {
        return this.listProduct;
    };
    ManageProduct.prototype.findByID = function (id) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (id == this.listProduct[i].id) {
                return i;
            }
        }
        return -1;
    };
    return ManageProduct;
}());
exports.ManageProduct = ManageProduct;
