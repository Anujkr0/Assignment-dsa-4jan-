class Node {
       
    constructor(d)
    {
        this.data = d;
        this.next = null;
    }
}
class LinkedList
{

  constructor(d){
    this.head = d;
  }
 
printNthFromLast(n)
{
    let len = 0;
    let temp = this.head;
    while (temp != null) {
        temp = temp.next;
        len++;
    }
    if (len < n)
        return;

    temp = this.head;
    for (let i = 1; i < len - n + 1; i++)
        temp = temp.next;

   console.log(temp.data);
}
push(new_data)
{
    let new_node = new Node(new_data);
    new_node.next = this.head;
    this.head = new_node;
}
}
 
    let llist = new LinkedList();
    llist.push(10);
    llist.push(8);
    llist.push(25);
    llist.push(45);

    llist.printNthFromLast(2);
