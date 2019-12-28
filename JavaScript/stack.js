// this is simple stack implementation in java script using arrays
// for python implementation, please refer to stack.py file
// to run this file
    // install nodejs
    // run using node stack.js


class Stack {
    // this is a constructor for stack
    constructor() {
        this.items = []; // init the array
        this.count = 0; // tells how much items in stack
    }

    // pushing into arrays
    push(element) {
        this.items.push(element);
        console.log(this.items)
        this.count++
    }
    // pop out top element
    pop() {
            if (this.items.length === 0) 
            {
                console.log("no item on stack")
            }
            const popped = this.items.pop();
            //console.log(popped)
            this.count--
         }
}

stack = new Stack();
stack.push("1")
stack.push("2")
// console.log(stack.items)
console.log("The item on stack - ", stack.count)
stack.pop()
stack.pop()
//stack.pop()