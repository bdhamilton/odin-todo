function displayProjects(todoList) {
  const projectList = document.querySelector("#projects");

  for (let i = 0; i < todoList.projects.length; i++) {
    const nextProject = document.createElement("li");
    nextProject.dataset.id = i;
    nextProject.innerText = todoList.projects[i].title;
    projectList.appendChild(nextProject);
  }
}

function displayTodos(project) {
  const todoList = document.querySelector("#todos");
  
  for (let i = 0; i < project.todos.length; i++) {
    const nextTask = document.createElement("li");
    nextTask.dataset.id = i;
    if (project.todos[i].completed === true) {
      nextTask.classList.add("complete");
    }
    nextTask.innerText = project.todos[i].title;

    todoList.appendChild(nextTask);
  }
}

function writeList(list) {
  /*
  Grab project list, selected project, todo list.
  Grab key DOM element.
  Write data
  */
}

export { displayProjects, displayTodos };