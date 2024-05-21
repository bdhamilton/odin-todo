class Todo {
  constructor(title, projectID = 0, description, dueDate, priority = "normal") {
    if (title === undefined) {
      console.log("You need at least a title!");
      return;
    };

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