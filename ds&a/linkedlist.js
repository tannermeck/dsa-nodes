const { node } = require("prop-types");

class linkedListNode {
    constructor(value){
        this.value = value;
        this.next = null
    }
    add(node){
        if (this.next === null) {
            this.next = node
        } else {
            this.next.add(node)
        }
    }
    getList(){
        if (this.next === null) {
            return this.value;
        } else {
            return this.value + this.next.getList();
        }
    }
}