function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.append = function(data) {
  if (this.head == null) {
    this.head = new Node(data);
    return;
  }
  var current = this.head;
  while (current.next != null) {
    current = current.next;
  }
  current.next = new Node(data);
};

LinkedList.prototype.prepend = function(data) {
  if (this.head != null) {
    var current = new Node(data);
    current.next = this.head;
    this.head = current;
    return;
  }
};

LinkedList.prototype.remove = function(data) {
  if (this.head == null) return;
  if (this.head.data === data) this.head = this.head.next;

  var current = this.head;
  while (current.next != null) {
    while (current.next.data === data) {
      current.next = current.next.next;
      if (current.next == null) return;
    }
    current = current.next;
  }
};

LinkedList.prototype.printData = function() {
  var current = this.head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

function play() {
  linkedList = new LinkedList();

  for (var i = 0; i < 5; i++)
    linkedList.append(Math.floor(Math.random() * 10) + 1);

  linkedList.printData();
  console.log("-------------------------");
  linkedList.remove(4);
  linkedList.printData();
}
play();

//console.log(JSON.stringify(linkedList, null, 4));
