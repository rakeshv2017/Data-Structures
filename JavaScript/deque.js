class Deque {

    constructor() {
        this.items = []
    };

    empty() {
        if (this.items == []) {
            console.log('no items in the list');
        }
    }

    addFront(data) {
        console.log("adding to front");
        this.items.unshift(data)
    }

    addBack(data) {
        console.log("adding to back");
        this.items.push(data)
    }

    removeFront() {
        console.log("removing data at front")
        this.items.shift()
    }

    removeBack() {
        console.log("remove data from back")
        this.items.pop()
    }

    printList() {
        console.log(this.items)
    }


}

deque = new Deque()
deque.empty()
deque.addFront(1)
deque.addFront(2)

deque.addBack(3)
deque.addBack(4)
deque.printList()
deque.removeFront()
deque.printList()
deque.removeBack()
deque.printList()


/*
output -> 
[ 2, 1, 3, 4 ]
[ 1, 3, 4 ]
[ 1, 3 ]
*/