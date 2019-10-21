// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        this.head = new Node(data,this.head);
    }
    size() {
        let count = 0;
        let node = this.head;
            while(node) {
                count++;
                node = node.next;
            }
        return count;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let node = this.head;
            while(node.next) {
                node = node.next;
            };
        return node;
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if(!this.head) {
            return;
        }
        this.head = this.head.next;
    }
    removeLast() {
        let previous = this.head;
        if(!previous) {
            return;
        } 
        
        if (previous && !previous.next) {
            this.head = null;
            return;
        } 

        let node = this.head.next;
        while(node.next) {
            previous = node;
            node = node.next;
        };
        previous.next = null;  
    }
    insertLast(data) {
        const lastNode = this.getLast();
        if(lastNode) {
            lastNode.next = new Node(data);
        }else {
            this.head = new Node(data);
        };
        
    }
}

module.exports = { Node, LinkedList };