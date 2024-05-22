import { logError, logSuccess } from "./logger";

// A class for building and managing individual todo items
class Todo {
  constructor(title, projectID = 0) {
    if (title === undefined) {
      logError("You need at least a title!");
      return;
    }

    this.title = title;
    this.projectID = projectID;
    this.priority = "normal";
    this.completed = false;
  }

  update(field, value) {
    // Make sure we don't blank a todo title.
    if (field === title && !value) {
      logError("You can't set a todo's title to blank.");
      return;
    }
    
    this[field] = value;
    logSuccess(`Updated the ${field} of this todo to ${value}.`);
  }

  toggleComplete() {
    this.completed = this.completed === false ? true : false;
  }
}

// A class for building and managing individual projects
class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];  // This blank array is where we'll keep our list of todos.
  }

  update(field, value) {
    // Make sure we don't blank a todo title.
    if (field === title && !value) {
      logError("You can't set a todo's title to blank.");
      return;
    }

    this[field] = value;
    logSuccess(`Updated the ${field} of this todo to ${value}.`);
  }

  addTodo(title) {
    if (!title) {
      logError("Your todo needs a title!");
      return;
    }

    this.todos.push(new Todo(title));
  }
}

// The master todo list, with projects inside and todos inside those projects.
// This will be the object we pass outside the module.
const todoList = {
  projects: [new Project("Inbox", "This is where all of your todos live by default.")],
  addProject: function (title) { 
    if (!title) {
      logError("Your project needs a title!");
      return;
    }
    this.projects.push(new Project(title));
    this.display();
  },
}

export default todoList;