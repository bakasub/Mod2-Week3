"use strict";
exports.__esModule = true;
exports.ManageOrder = void 0;
var ManageOrder = /** @class */ (function () {
    function ManageOrder() {
        this.listOfOrder = [];
    }
    ManageOrder.prototype.add = function (t) {
        this.listOfOrder.push(t);
    };
    ManageOrder.prototype.update = function (id, t) {
    };
    ManageOrder.prototype.remove = function (id) {
        var index = this.findByID(id);
        this.listOfOrder.splice(index, 1);
    };
    ManageOrder.prototype.findAll = function () {
    };
    ManageOrder.prototype.findByID = function (id) {
        for (var i = 0; i < this.listOfOrder.length; i++) {
            if (id == this.listOfOrder[i].id) {
                return i;
            }
        }
        return -1;
    };
    return ManageOrder;
}());
exports.ManageOrder = ManageOrder;
