import {nodeObj} from "./nodeObj";

class graph{
    adjList: Array<Array<number>>;
    currNodeNum: number;
    objectMapping: {[index: number]: nodeObj};

    constructor(){
        //adjaciency list: contains for each node all connected nodes. 
        //If the sign is positive means the current node points to this node if its negative the other node points to me
        this.adjList = []
        this.currNodeNum = 1

        //maps the integer of the node to the actual node object
        this.objectMapping = {}
    }
    addNode(name: string){
        
    }
}

export {graph}