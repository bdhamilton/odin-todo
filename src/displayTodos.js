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
    const nextListItem = document.createElement("li");
    
    // Create and append a button for each project
    const nextProject = document.createElement("button");
    nextProject.dataset.project = i;
    nextProject.innerText = list.projects[i].title;
    nextListItem.appendChild(nextProject);

    // Create and append a delete button for all but the default list
    if (i !== 0) {
      const deleteButton = document.createElement("button")
      deleteButton.dataset.project = i;
      deleteButton.innerText = "Delete";
      deleteButton.classList.add("delete");
      nextListItem.appendChild(deleteButton);
    }
    
    projectList.appendChild(nextListItem)
  }

  // Grab the currently selected project.
  const project = list.projects[list.selectedProject];

  // Print the todos from that project.
  todoHeader.innerText = project.title;
  todoList.dataset.project = list.selectedProject;

  for (let i = 0; i < project.todos.length; i++) {
    const nextListItem = document.createElement("li");
    
    const nextTodo = document.createElement("button");
    nextTodo.dataset.todo = i;
    if (project.todos[i].completed === true) {
      nextTodo.classList.add("complete");
    }
    nextTodo.innerText = project.todos[i].title;
    
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete";
    deleteButton.dataset.todo = i;
    deleteButton.classList.add("delete");

    nextListItem.appendChild(nextTodo);
    nextListItem.appendChild(deleteButton);
    todoList.appendChild(nextListItem);
  }
}

function setListeners() {
  // Lis
  const deleteButtons = document.querySelectorAll(".delete");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteItem);
  }

}

export { writeList };