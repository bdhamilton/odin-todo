import { logError, logSuccess } from "./logger.js";

// A class for building and managing individual todo items
class Todo {
  constructor(title, projectID = 0) {
    if (title === undefined) {
      logError("You need at least a title!");
      return;
    }

    this.title = title;
    this.projectID = projectID;
    this.highPriority = false;
    this.completed = false;
    this.dueDate = undefined;
  }

  update(field, value) {
    // Make sure we don't blank a todo title.
    if (field === 'title' && !value) {
      logError("You can't set a todo's title to blank.");
      return;
    }

    this[field] = value;
    logSuccess(`Updated the ${field} of this todo to ${value}.`);
  }

  toggleComplete() {
    this.completed = this.completed === false ? true : false;
  }

  togglePriority() {
    this.highPriority = this.highPriority === false ? true : false;
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
    if (field === 'title' && !value) {
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

  deleteTodo(project, id) {
    project.todos.splice(id, 1);
    logSuccess("Your todo has been deleted.");
  }
}

// The master todo list, with projects inside and todos inside those projects.
// This will be the object we pass outside the module.
class todoList {
  constructor(storedList) {
    if (storedList) {
      // If list has been pulled from storage, convert and use it.
      Object.setPrototypeOf(storedList, new todoList());
      for (const project of storedList.projects) {
        Object.setPrototypeOf(project, new Project());
        for (const todo of project.todos) {
          Object.setPrototypeOf(todo, new Todo());
        }
      }

      return storedList;
    } else {
      // Otherwise initialize a new one.
      // Initialize a new project list.
      this.projects = [new Project("Inbox", "This is where all of your todos live by default.")];
  
      // Start by selecting the default project.
      this.selectedProject = 0;
    }
  }

  addProject(title) {
    this.projects.push(new Project(title));
  }

  deleteProject(list, id) {
    list.projects.splice(id, 1);
    logSuccess("Your project has been deleted.");
  }

  selectProject(project) {
    this.selectedProject = project;
  }
}

export default todoList;