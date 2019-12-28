class Node {

    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data, this.head)
        console.log(this.head)
    }

}

node1 = new Node(5)
console.log(node1)
console.log(node1.data)
console.log(node1.next)
link = new LinkedList()

console.log("\n")
console.log(link)
link.insertFirst(15)
console.log(link)


