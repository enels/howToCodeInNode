const Todos = require('./index');
const assert = require('assert').strict;
const fs = require('fs');

describe("complete()", function() {
	
	it("should fail if there are no TODOs", function() {
		let todos = new Todos();
		const expectedError = new Error("You have no TODOs stored");

		assert.throws(() => {

			todos.complete("doesn't exist");
		}, expectedError);
	});
});

describe("saveToFile()", function() {
	
	beforeEach(function () {

		this.todos = new Todos();
		this.todos.add("save a CSV");
	});

	afterEach(function() {
		if (fs.existsSync("todos.csv")) {
			fs.unlinkSync("todos.csv");
		}
	});

	it("should have a single TODO", async function() {
		//let todos = new Todos();

		//todos.add("save a CSV");

		//todos.complete("save a CSV");

		await this.todos.saveToFile();


			assert.strictEqual(fs.existsSync('todos.csv'), true);
			let expectedContents = "Title,Completed\nsave a CSV,true\n";
			let content = fs.readFileSync('todos.csv').toString();
			assert.strictEqual(content, expectedContents);
	});
});
