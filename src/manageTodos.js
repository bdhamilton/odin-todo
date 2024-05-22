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

  delete() {
    // Grab the index of the project we want to delete.
    const index = todoList.projects.indexOf(this);

    // Refuse to delete the default project.
    if (index === 0) {
      logError("You can't delete your inbox!");
      return;
    }

    // Otherwise, delete it.
    todoList.projects.splice(index, 1);
    logSuccess("Your project has been deleted.");
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