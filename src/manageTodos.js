class Todo {
  constructor(title, projectID = 0, description, dueDate, priority = "normal") {
    if (title === undefined) {
      console.log("You need at least a title!");
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
        console.log("You can't set a todo's title to blank.");
      } else {
        this[field] = value;
      }
    } else {
      console.log("You can only update titles, descriptions, due dates, and priority levels.");
    }
  }

  toggleComplete() {
    this.completed = this.completed === false ? true : false;
  }

  display() {
    console.table(this);
  }
}

/* 
CONSIDER:
The fact that these two classes are identical makes me think there's
a simpler way of storing this data. Should projects be an extension
of the todo class? That feels strange because projects _contain_ todos, 
but I'm not sure that subclasses necessary need to be child classes.
The only difference between the two classes is that projects include a
list of todos inside them.

For now I might actually just simplify projects. 
*/

class Project {
  constructor(title, description) {
    if (title === undefined) {
      console.log("You need at least a title!");
      return;
    }

    this.title = title;
    this.description = description;
    this.todos = [];  // This blank array is where we'll keep our list of todos.
  }

  update(field, value) {
    // Make sure we're updating a legitimate field.
    if (field === "title" || field === "description") {
      if (field === "title" && !value) {
        console.log("You can't set a todo's title to blank.");
      } else {
        this[field] = value;
      }
    } else {
      console.log("You can only update titles and descriptions.");
    }
  }

  display() {
    console.table(this);
  }
}