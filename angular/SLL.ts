// Create a singly linked list in Typescript for practice!


class SLNode {
    val: number;
    next: any;
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    head: any;
    add(val: number) {
        let runner = this.head;
        if (!runner) {
            this.head = new SLNode(val);
            return this;
        }
        while (runner.next){
            runner = runner.next;
        }
        runner.next = new SLNode(val);
        return this;
    }
}

let list = new SLL()
list.add(2).add(3).add(4)
console.log(list)
