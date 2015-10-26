console.log('******** hello world ********')

var h = helloWorld();

function* helloWorld() {
	var hello = yield 'hello';
	console.log('hello', hello);
	var world = yield 'world';
	console.log('world', world);
	return '!';
}


console.log(h.next(1));	
console.log(h.next(2));	//上一个yield的返回值，1不打印
console.log(h.next(3));	

// { value: 'hello', done: false }
// hello 2
// { value: 'world', done: false }
// world 3
// { value: '!', done: true }

//Array

console.log('******** array ********')

function* array() {
	yield [1, 2];
	yield* [3, 4];
	yield "56";
	yield* "78";
}

var a = array();

console.log(a.next());	
console.log(a.next());
console.log(a.next());	
console.log(a.next());	
console.log(a.next());
console.log(a.next());
console.log(a.next());

// { value: [ 1, 2 ], done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: '56', done: false }
// { value: '7', done: false }
// { value: '8', done: false }
// { value: undefined, done: true }

//arguments
console.log('******** arguments ********');
function* argumentsFuc() {
	yield arguments;
	yield* arguments;
}

var args = argumentsFuc(1, 2);

console.log(args.next());	
console.log(args.next());
console.log(args.next());	
console.log(args.next());

// { value: { '0': 1, '1': 2 }, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: undefined, done: true }

//Generator
console.log('******** Generator ********');
function* Gen1() {
	yield 2;
	yield 3;
}

function* Gen2() {
	yield 1;
	yield* Gen1();
	yield 4;
}

var gen2 = Gen2();


console.log(gen2.next());	
console.log(gen2.next());
console.log(gen2.next());	
console.log(gen2.next());
console.log(gen2.next());

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }

