function Queue() {
    this.bucket = {};
    this.front = 0;
    this.size = 0;
}

Queue.prototype.enqueue = function(data) {
    if (data != null) {
        this.bucket[this.size] = data;
        this.size++;
    }
};

Queue.prototype.dequeue = function() {
    if (this.size == 0) return undefined;

    var val = this.bucket[this.front];
    delete this.bucket[this.front];
    this.front++;
    this.size--;
    return val;
};

Queue.prototype.peek = function() {
    if (this.size == 0) return null;
    return this.bucket[this.front];
};

function play() {
    q = new Queue();
    var i = 0;
    while (i < 10) {
        q.enqueue(Math.floor(Math.random() * 10) + 1);
        i++;
    }
    console.log(JSON.stringify(q, null, 4));
    q.dequeue();
    console.log(JSON.stringify(q, null, 4));
}

play();