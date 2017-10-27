class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    get length() {
        return this.size;
    }

    addLast(data) {
        const node = {
            data: data,
            next: null
        }

        if (this.size === 0 && this.head == null) {
            this.head = node;
        }else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size++;
    }

    addFirst(data) {
        const node = {
            data: data,
            next: null
        }

        const first_node = this.head;
        this.head = node;
        this.head.next = first_node;
        this.size++;

        if (this.size === 1) {
            this.tail = this.head;
        }
    }

    removeLast() {
        if (this.size > 0) {
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
            }else {
                let current = this.head;
                while (current.next !== this.tail) {
                    current = current.next;
                }
                current.next = null;
                this.tail = current;
            }
            this.size--;
        }
    }

    removeFirst() {
        if (this.size > 0) {
            this.head = this.head.next;
            this.size--;

            if (this.size === 0) {
                this.tail = null;
            }
        }
    }

    printList(log) {
        let current = this.head;
        while (current) {
            log(current.data);
            current = current.next;
        }
    }
}

var linkedList = new LinkedList();
console.log("Initial Size:" + linkedList.length);
linkedList.addLast(44);
linkedList.addLast(65);
linkedList.addFirst(12);
linkedList.addLast(88);
linkedList.addLast(121);
linkedList.removeLast();
linkedList.removeFirst();
console.log("Remain Size:" + linkedList.length);
linkedList.printList(console.log);

