// Stacks

// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

// Creates constructor method for the stack. Empty 1st node represented by null, indicating the top of the stack
class Stack {
    constructor() {
        this.top = null;
    }

    // insert data onto top of the stack
    // O(1) since we are adding only to the top of the stack
    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    // removal from a stack, limited to the top of the stack
    // O(1) since we are removing only from the top of the stack
    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}


// Queues

// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Creates a constructor method for the queue. Contains the first and last nodes indicating the beginning and the ending of the queue. Initially it is empty.
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    // O(1) since we are adding items only at the end of the queue
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    // // O(1) since we are removing items from only 1 place (beginning of the queue)
    dequeue() {
        //if the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        //if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
} 