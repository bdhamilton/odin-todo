import logError from "./logger";

/*

All editing and storing of todos and projects should be handled in this module.
Right now I'm having this module handle a few errors and log a few things,
but I think I should delete all of that stuff when the rest of the program is
done. Errors should be ruled out at point of input, and I don't want to rely
on console logging for any sort of notices.

*/

class Todo {
  constructor(title, projectID = 0, description, dueDate, priority = "normal") {
    if (title === undefined) {
      logError("You need at least a title!");
      return;
    }

    this.title = title;
    this.projectID = projectID;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  update(field, value) {
    // Make sure we're updating a legitimate field.
    if (field === "title" || field === "description" || field === "dueDate" || field === "priority") {
      if (field === "title" && !value) {
        logError("You can't set a todo's title to blank.");
      } else {
        this[field] = value;
      }
    } else {
      logError("You can only update titles, descriptions, due dates, and priority levels.");
    }
  }

  toggleComplete() {
    this.completed = this.completed === false ? true : false;
  }

  display() {
    console.table(this);
  }
}

class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.todos = [];  // This blank array is where we'll keep our list of todos.
  }

  update(field, value) {
    // Make sure we're updating a legitimate field.
    if (field === "title" || field === "description") {
      if (field === "title" && !value) {
        logError("You can't set a todo's title to blank.");
      } else {
        this[field] = value;
      }
    } else {
      logError("You can only update titles and descriptions.");
    }
  }

  display() {
    console.table(this);
  }
}

/*
I'm creating this function with the thought that I don't want the 
`projectList` variable to be modifiable from the main script. If I only
export this function and not the variable, does 
that shield it?
*/
function addProject(title, description) {
  if (!title) {
    logError("Your project needs a title!");
    return;
  }

  const nextProject = new Project(title, description);
  projectList.push(nextProject);
  console.log(projectList[projectList.length - 1]);
}

function addTodo(title, project = 0) {
  if (!title) {
    logError("Your todo needs a title!");
    return;
  }

  const nextTodo = new Todo(title);
  projectList[project].push(nextTodo);
}

// Initialize default project and add it to our master project list.
const projectList = [];
const baseProject = new Project("Inbox", "This is where all of your todos live by default.");
projectList.push(baseProject);

// Do I need to export the classes in order to use their constructors?
export {Todo, Project, addProject, addTodo};