class linkedListNode {
    constructor(value){
        this.value = value;
        this.next = null
    }
    add(node){
        if (this.next === null) {
            return node
        } else {
            this.add(node)
        }
    }
}