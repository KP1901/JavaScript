let arr = [1, 2, 3, 4];

let iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*
iterator = arr[Symbol.iterator]();

What happens here (exactly):

1.arr is an iterable
2.arr[Symbol.iterator] is a function
3.Calling it () creates an iterator object
4.That iterator object has a next() method

So yes 👇

This creates an iterator object which has a next() method
*/