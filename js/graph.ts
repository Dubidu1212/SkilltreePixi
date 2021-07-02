import {nodeObj as node} from "./nodeObj";

class graph{
    //adjaciency list: contains for each node all connected nodes. 
    //If the sign is positive means the current node points to this node if its negative the other node points to me
    //structure: adjList[index].get(neighbourIndex) == number of times this dude is connected
    adjList: Map<number,Map<number,number>>;

    //TODO: Think about named outputs
    
    private currNodeNum: number;
    //maps the integer of the node to the actual node object
    nodeMapping: Map<number, node>;

    constructor(){
        this.currNodeNum = 1

    }
    addNode(): node{
        let tempNode = new node;
        
        tempNode.id = this.currNodeNum++;

        //add empty array
        this.adjList[tempNode.id] = [];

        //add node to nodeMapping
        this.nodeMapping[tempNode.id] = tempNode;
        
        return tempNode;
    }
    removeNode(index: number){
        this.adjList[index].forEach(id => {
            this.adjList[id].remove(index);
        });

        //remove node at index from the list
        this.adjList[index] = null;
    }
}

export {graph}