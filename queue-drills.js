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

// look at the first item in the queue
function peek(queue) {
    return queue.first.value
}

// check if the queue is empty or not
function isEmpty(queue) {
    if (queue.first === null) {
        return true
    }
    return false
}

// display what's in the queue
function display(queue) {
    let currentNode = queue.first

    while (currentNode !== null) {
        console.log(currentNode.value)
        currentNode = currentNode.next    
    }
}

function main() {
    let starTrekQ = new Queue()

    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')

    // remove Spock from the queue
    starTrekQ.dequeue()
    starTrekQ.dequeue()


    // console.log(JSON.stringify(starTrekQ))
    console.log(peek(starTrekQ))
    console.log(isEmpty(starTrekQ))
    console.log(display(starTrekQ))
}

main()

// Check to see who is first one on the Queue?
// 8. Queue implementation using a stack
// There are many ways to implement a queue. You have learned using singly linked list, and doubly linked list. Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)

// 9. Square dance pairing
// As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

// F Jane

// M Frank

// M John

// M Sherlock

// F Madonna

// M David

// M Christopher

// F Beyonce

// Female dancer is Jane, and the male dancer is Frank
// Female dancer is Madonna, and the male dancer is John
// Female dancer is Beyonce, and the male dancer is Sherlock
// There are 2 male dancers waiting to dance
// 10. The Ophidian Bank
// At the Ophidian Bank, a single teller serves a long queue of people. New customers join the end of the queue, and the teller will serve a customer only if they have all of the appropriate paperwork. Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue. Show what a few minutes of the bank's lobby would look like.