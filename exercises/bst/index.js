// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data) {
        // let node = arguments[1]? arguments[1] : this;
        // if(data < node.data) {    
        //     if(node.left) {
        //         node.insert(data,node.left);
        //     } else {
        //         node.left = new Node(data);
        //     }   
        // } else if(data > node.data) {
        //     if(node.right) {
        //         node.insert(data,node.right);
        //     } else {
        //         node.right = new Node(data);
        //     }
        // }
        if(data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }
    contains(data) {
        if (data === this.data) {
            console.log("result: ", this);
            return this;
        }

        if(data < this.data && this.left) {
            return this.left.contains(data)
        } else if(data > this.data && this.right) {
            return this.right.contains(data) 
        } 
        
        return null;
    }
}

module.exports = Node;
