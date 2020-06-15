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

// helper functions

// look at the top of the stack without removing it
function peek(stack) {
    return stack.top.data
}

// allows you to check if the stack is empty or not
function isEmpty(stack) {
    if (stack.top === null) {
        return true
    }
    return false
}

// display the stack
function display(stack) {
    let currentTop = stack.top

    while (currentTop !== null) {
        console.log(currentTop.data)
        currentTop = currentTop.next
    }
}

function main() {
    let starTrek = new Stack()

    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')

    starTrek.pop()
    starTrek.pop()
    starTrek.push('Scotty')

    // console.log(JSON.stringify(starTrek))
    // console.log(peek(starTrek))
    // console.log(isEmpty(starTrek))
    // console.log(display(starTrek))
}
main()

// 3. Check for palindromes using a stack
// A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.
// Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.

function is_palindrome(s) {
    // sets everything to lower case and removes symbols and spaces
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    let newStack = new Stack()
    let newWord = ''

    // push each letter into the stack
    for (let i = 0; i < s.length; i++) {
        newStack.push(s[i])
    }
    // console.log(display(newStack))
    // console.log(JSON.stringify(newStack)) 

    // pop off each letter of the stack from the top (backwards)
    for (let i = 0; i < s.length; i++) {
        newWord = newWord + newStack.pop();
        // console.log(newWord); 
    }
    // console.log(newWord);

    // if newWord (backwards) equals the string, it is a palindrome
    if (newWord === s) {
        return true
    }
    return false
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

// 4. Matching parentheses in an expression
// A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis. As a bonus provide a meaningful error message to the user as to what's missing. For example, you are missing a ( or missing a ")".

// For version 1, the parentheses you need to consider are ( and ). Finding a close parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

// Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

// Extension extension exercise: Also recognize 2 types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.

// 5. Sort stack
// Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).