function displayTodos(list) {
  // Print out an initial version of the todo list
  updateList();

  // Write the current list to the DOM
  function updateList() {
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
      nextProject.classList.add("project-button")
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
      nextTodo.classList.add("todo-button");
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
  
    setListeners();
  }
  
  // Listen for changes from the user.
  function setListeners() {
    // Listen for add buttons 
    document.querySelector("#addproject").addEventListener("click", addProject);
    document.querySelector("#addtodo").addEventListener("click", addTodo);
  
    // Listen for delete buttons
    const deleteButtons = document.querySelectorAll(".delete");
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", deleteItem);
    }
  
    // Listen for project switching
    const projectButtons = document.querySelectorAll(".project-button");
    for (let i = 0; i < projectButtons.length; i++) {
      projectButtons[i].addEventListener("click", selectProject);
    }
  
    // Listen for todo completion
    const todoButtons = document.querySelectorAll(".todo-button");
    for (let i = 0; i < todoButtons.length; i++) {
      todoButtons[i].addEventListener("click", completeTodo);
    }
  }
  
  // Handle requests to add a project.
  function addProject(event) {
    // Grab new project title and clear the input
    const projectInput = document.querySelector('#newproject');
    const newProject = projectInput.value;
    projectInput.value = '';
  
    // Add the new project 
    list.addProject(newProject);
  
    // Select the newly created list and update
    list.selectProject(list.projects.length-1);
    updateList();
  }
  
  // Handle requests to add a todo to a particular project.
  function addTodo(event) {
    // Grab new todo title and clear the input
    const todoInput = document.querySelector("#newtodo");
    const newTodo = todoInput.value;
    todoInput.value = '';
  
    // Add the new todo
    list.projects[list.selectedProject].addTodo(newTodo);
  
    // Rewrite the todo list
    updateList();
  }
  
  // Handle requests to deal with either a project or a todo.
  function deleteItem(event) {
    // Grab item type and ID
    if (event.target.dataset.project) {
      list.deleteProject(list, event.target.dataset.project);
    } else if (event.target.dataset.todo) {
      const project = document.querySelector("#todos").dataset.project;
      list.projects[project].deleteTodo(list.projects[project], event.target.dataset.todo);
    }
  
    updateList();
  }
  
  // Handle requests to change the project
  function selectProject(event) {
    list.selectProject(event.target.dataset.project);
    updateList();
  }
  
  // Handle requests to toggle a todo complete
  function completeTodo(event) {
    list.projects[list.selectedProject].todos[event.target.dataset.todo].
    toggleComplete();
    updateList();
  }
}

export default displayTodos;