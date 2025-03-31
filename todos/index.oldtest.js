//const Todos = require('./index');
//const assert = require('assert').strict;

describe ("integration test", function() {
	it ("It should be able to add and complete TODOs", function() {
		
		let todos = new Todos();
		//assert.notStrictEqual(todos.list().length, 1);
		todos.add("run code");
		todos.add("test code");
		todos.complete("test code");
	
		assert.strictEqual(todos.list().length, 2);
		assert.deepStrictEqual(todos.list(), [{title: "run code", completed: false}, {title: "test code", completed: true}]);
	});
});
