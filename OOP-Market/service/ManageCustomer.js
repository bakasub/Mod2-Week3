"use strict";
exports.__esModule = true;
exports.ManageCustomer = void 0;
var ManageCustomer = /** @class */ (function () {
    function ManageCustomer() {
        this.customerList = [];
    }
    ManageCustomer.prototype.add = function (customer) {
        this.customerList.push(customer);
    };
    ManageCustomer.prototype.update = function (id, t) {
    };
    ManageCustomer.prototype.remove = function (id) {
        var index = this.findByID(id);
        this.customerList.splice(index, 1);
    };
    ManageCustomer.prototype.findAll = function () {
    };
    ManageCustomer.prototype.findByID = function (id) {
        for (var i = 0; i < this.customerList.length; i++) {
            if (this.customerList[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    ManageCustomer.prototype.findProductById = function (id) {
    };
    return ManageCustomer;
}());
exports.ManageCustomer = ManageCustomer;
