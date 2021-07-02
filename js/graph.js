"use strict";
exports.__esModule = true;
exports.graph = void 0;
var graph = /** @class */ (function () {
    function graph() {
        //adjaciency list: contains for each node all connected nodes. 
        //If the sign is positive means the current node points to this node if its negative the other node points to me
        this.adjList = [];
        this.currNodeNum = 1;
        //maps the integer of the node to the actual node object
        this.objectMapping = {};
    }
    graph.prototype.addNode = function (name) {
    };
    return graph;
}());
exports.graph = graph;
