function writeList(list) {
  /*
  Grab project list, selected project, todo list.
  Grab key DOM element.
  Write data
  */
  // Grab the DOM elements we need to overwrite.
  const projectList = document.querySelector("#projects");
  const todoHeader = document.querySelector("#todo-header");
  const todoList = document.querySelector("#todos");

  // Blank them all.
  projectList.innerHTML = '';
  todoHeader.innerText = '';
  todoList.innerHTML = '';

  // Add all of the projects
  for (let i = 0; i < list.projects.length; i++) {
    const nextProject = document.createElement("button");
    nextProject.dataset.project = i;
    nextProject.innerText = list.projects[i].title;
    projectList.appendChild(nextProject);
  }

  // Grab the currently selected project.
  const project = list.projects[list.selectedProject];

  // Print the todos from that project.
  todoHeader.innerText = project.title;
  todoList.dataset.project = list.selectedProject;

  for (let i = 0; i < project.todos.length; i++) {
    const nextTask = document.createElement("button");
    nextTask.dataset.todo = i;
    if (project.todos[i].completed === true) {
      nextTask.classList.add("complete");
    }
    nextTask.innerText = project.todos[i].title;

    todoList.appendChild(nextTask);
  }
}

export { writeList };