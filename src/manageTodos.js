import logError from "./logger";

/*

All editing and storing of todos and projects should be handled in this module.
Right now I'm having this module handle a few errors and log a few things,
but I think I should delete all of that stuff when the rest of the program is
done. Errors should be ruled out at point of input, and I don't want to rely
on console logging for any sort of notices.

*/

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
    // Make sure we're updating a legitimate field.
    if (field === "title" || field === "description" || field === "dueDate" || field === "priority") {
      if (field === "title" && !value) {
        logError("You can't set a todo's title to blank.");
      } else {
        this[field] = value;
        console.log(`Updated the ${field} of this todo to ${value}.`);
      }
    } else {
      logError("You can only update titles, descriptions, due dates, and priority levels.");
    }
  }

  toggleComplete() {
    this.completed = this.completed === false ? true : false;
  }
}

class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];  // This blank array is where we'll keep our list of todos.
  }

  update(field, value) {
    // Make sure we're updating a legitimate field.
    if (field === "title" || field === "description") {
      if (field === "title" && !value) {
        logError("You can't set a todo's title to blank.");
      } else {
        this[field] = value;
        console.log(`Updated the ${field} of this todo.`);
      }
    } else {
      logError("You can only update titles and descriptions.");
    }
  }

  addTodo(title) {
    if (!title) {
      logError("Your todo needs a title!");
      return;
    }

    this.todos.push(new Todo(title));
  }
}

/*
I'm creating this function with the thought that I don't want the 
`todoList` variable to be modifiable from the main script. If I only
export this function and not the variable, does 
that shield it?
*/
// function addProject(title, description) {
//   if (!title) {
//     logError("Your project needs a title!");
//     return;
//   }

//   const nextProject = new Project(title, description);
//   todoList.projects.push(nextProject);

//   console.log(`Adding "${title}" to your list of projects...`);
//   console.log(`You now have ${todoList.getNumber()} working projects.`)
// }

// function addTodo(title, project = 0) {
//   if (!title) {
//     logError("Your todo needs a title!");
//     return;
//   }

//   const nextTodo = new Todo(title);
//   todoList.projects[project].todos.push(nextTodo);

//   console.log(`Adding your task to ${todoList.projects[project].title}...`);
// }

// Initialize default project and add it to our master project list.

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