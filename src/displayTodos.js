function displayProjects(todoList) {
  console.log("Here are your current projects:");
  for (let i = 0; i < todoList.projects.length; i++) {
    console.log(`${i + 1}: ${todoList.projects[i].title}`);
  }
}

function displayTodos(project) {
  console.log(`Here are the tasks in your ${project.title} project:`);
  for (let i = 0; i < project.todos.length; i++) {
    let doneMark = project.todos[i].completed === true? "X" : " ";
    console.log(`${i + 1}: [${doneMark}] ${project.todos[i].title}`);
  }
}

export { displayProjects, displayTodos };