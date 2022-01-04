class BinaryTreeNode {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
    add(node){
        if (node.data < this.data){
            if (this.left){
                this.left.add(node);
            } else {
                this.left = node
            }
        } else {
            if (this.right){
                this.right.add(node)
            } else {
                this.right = node;
            }
        }
    }
}