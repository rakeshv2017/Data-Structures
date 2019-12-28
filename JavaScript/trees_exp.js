class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data)
        console.log(node);
        this.children.push(node);
        //console.log(this.children);
    }

}

node1 = new Node(1);        
node1.add(10)
