/*
    implementing Queue class in Java script
    contains following functions:
        enque - add element in front of the array
        empty - check if the array is empty
        deque - remove element from end

*/



class Queue {
    constructor() {
        this.items = [];
    }

    //unshift helps to add element at the start of array
    enque(element) {
        this.items.unshift(element);
        console.log("element added to list")

    }

    deque() {
        console.log("element removed from list")
        return this.items.pop();
        
    }

    empty() {
         if (this.items === []) {
              return true
          }
          else { return false}

    }

    printQueue() {
        if (this.items === [] ) {
            console.log("no items to print")
        }
        else {
            console.log(this.items)
        }
    }
}

queue = new Queue()
queue.enque(1)
queue.enque(2)
queue.enque(3)
queue.enque(4)
queue.empty()
queue.printQueue()
queue.deque()
queue.deque()
queue.printQueue()

