"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(id, customer, cart) {
        this.cart = [];
        this._id = id;
        this._customer = customer;
        this.cart = cart;
    }
    Object.defineProperty(Order.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "customer", {
        get: function () {
            return this._customer;
        },
        set: function (value) {
            this._customer = value;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.addProduct = function (newProduct) {
        this.cart.push(newProduct);
    };
    Order.prototype.display = function () {
        return this.cart;
    };
    return Order;
}());
exports.Order = Order;
