"use strict";
exports.__esModule = true;
exports.graph = void 0;
var nodeObj_1 = require("./nodeObj");
var graph = /** @class */ (function () {
    function graph() {
        this.currNodeNum = 1;
    }
    graph.prototype.addNode = function () {
        var tempNode = new nodeObj_1.nodeObj;
        tempNode.id = this.currNodeNum++;
        //add empty array
        this.adjList[tempNode.id] = [];
        //add node to nodeMapping
        this.nodeMapping[tempNode.id] = tempNode;
        return tempNode;
    };
    graph.prototype.removeNode = function (index) {
        var _this = this;
        this.adjList[index].forEach(function (id) {
            _this.adjList[id].remove(index);
        });
        //remove node at index from the list
        this.adjList[index] = null;
    };
    return graph;
}());
exports.graph = graph;
