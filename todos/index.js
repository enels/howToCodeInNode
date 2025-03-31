const fs = require('fs').promises;

class Todos {

	constructor() {
		this.todos = [];
	}

	list() {
		return [...this.todos];
	}

	// add a new todo item
	add(title) {
		let todo = {
			title: title,
			completed: false
		}

		this.todos.push(todo);
	}

	// marks item as completed
	// throws an error if searched item is not found in todos list
	complete(title) {

		// check to see if there's any task in the TODOs list before
		// attempting to mark it as completed
		if (this.todos.length === 0) {
			throw new Error("You have no TODOs stored. Why don't you add one first");
		}

		let todoFound = false;
		this.todos.forEach((todo) => {
			if (todo.title === title) {

				// mark as complete
				todo.completed = true;
				todoFound = true;
				return;
			}
		});

		// checks to see if the task exists in the TODOs list
		if (!todoFound) {
			throw new Error(`No TODO was found with the title: ${title}`);
		}
	}

	/**
	 * saves to file
	 * @param: function
	 * @return: null
	 */
	saveToFile() {
		
		let fileContents = 'Title,Completed\n';
		this.todos.forEach((todo) => {
		

			fileContents += `${todo.title},${todo.completed}\n`
		});

		//fs.writeFile('todos.csv', fileContents, callback);
		return fs.writeFile('todos.csv', fileContents);
	}
}


module.exports = Todos;
