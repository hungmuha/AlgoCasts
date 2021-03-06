  
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
			if(!node){
				return null;
			}

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
	getAt(index) {
		let counter = 0;
		let node = this.head;
		if(!node) {
			return null
		}
		while(node) {
			if(counter===index) {
				return node;
			}
			counter++;
			node = node.next;
		}
		return null;
	}
	removeAt(index) {
		if(!this.head || !this.getAt(index)) {
			return;
		}

		if(index == 0) {
			this.head = this.head.next;
			return;
		}

		let previous = this.getAt(index-1);
		previous.next = previous.next.next;
	}
	insertAt(data,index) {
		if(!this.head) {
			this.head = new Node(data);
			return;
		}
		if(index == 0) {
			this.head = new Node(data,this.head);
			return;
		}
		
		let previous = this.getAt(index-1) || this.getLast();
		const node = new Node(data,previous.next);
		previous.next = node;
    }
    forEach(providedFunction) {
        var node = this.head;
        var index = 0;
        while(node) {
            providedFunction(node,index);
            node = node.next;
            index++;
        };
    }
    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };