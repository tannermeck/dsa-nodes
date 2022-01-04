class PersonTreeNode {
    constructor(person) {
      this.value = person.name;
      this.person = person;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
      // implemented as in previous challenge
    }
  
    findPerson(name) {
    if (name === this.value){
        return this.person
    } else if (name < this.value){
          if (name < this.left){
              this.left.findPerson(name)
          } else {
              this.right.findPerson(name)
          }
      } else {
          if (name > this.right){
              this.right.findPerson(name)
          } else {
              this.left.findPerson(name)
          }
      }
    }
  }