class Node:

    def __init__(self, data):
        self.data = data
        self.next = None

    def get_data(self):
        return self.data

    def get_next(self):
        return self.next

    def set_next(self, next):
        self.next = next

    def __str__(self):
        return str(self.data)

class LinkedList:

    def __init__(self):
        self.head = None

    def add(self, data):
        if not self.head:
            node = Node(data)
            self.head = node
            return
        else:
            node = self.head
            while node.get_next() is not None:
                node = node.get_next()
            new_node = Node(data)
            node.set_next(new_node)
            return

    def find(self, data):
        current_node = self.head
        while current_node:
            if current_node.get_data() == data:
                return data
            else:
                current_node = current_node.get_next()
        if current_node is None:
            print("No data in list")
        return current_node

    def remove(self, data):
        current_node = self.head
        while current_node.get_next() is not None:
            if current_node.get_data() == data:
                self.head = current_node.get_next()
                return
            else:
                if current_node.get_next().data == data:
                    current_node.set_next(current_node.get_next().get_next())
                    return
                else:
                    current_node = current_node.get_next()

    def print_list(self):
        node = self.head
        while node is not None:
            print(node.get_data())
            node = node.get_next()


li = LinkedList()
li.add(4)
li.add(3)
li.add(8)
li.add(20)
li.remove(4)
li.print_list()
