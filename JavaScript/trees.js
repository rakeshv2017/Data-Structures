class Node {

    constructor(data) {
        this.data = data;
        this.children = [];
        console.log("constructor called");
        console.log(this.data);
        console.log(this.children);
        console.log("constructor end");
    }

    insert(items) {
        const node = new Node(items);
        console.log("\n");
        console.log("insert called");
        console.log(node);
        this.children.push(node);
        console.log(this.children) 
    }

}
// class Tree {
// }

node1 = new Node(1);
node1.insert(10);
node2 = new Node(2);
node2.insert(20);