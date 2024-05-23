import todoList from "./manageTodos";
// import { writeList } from "./displayTodos";

const myList = new todoList();

// Populate some sample data
myList.addProject("test");
myList.projects[1].addTodo("test todo");
myList.projects[1].addTodo("another test");
myList.projects[1].addTodo("yet another test");
myList.projects[1].todos[1].toggleComplete();

myList.selectProject(1);

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

  setListeners();
}

function setListeners() {
  // Listen for add buttons 
  document.querySelector("#addproject").addEventListener("click", addProject);
  document.querySelector("#addtodo").addEventListener("click", addTodo);

  // Listen for delete buttons
  const deleteButtons = document.querySelectorAll(".delete");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteItem);
  }
}

function addProject(event) {
  // Grab new project title and clear the input
  const projectInput = document.querySelector('#newproject');
  const newProject = projectInput.value;
  projectInput.value = '';

  // Add the new project 
  myList.addProject(newProject);

  // Rewrite the todo list
  writeList(myList);
}

function addTodo(event) {
  // Grab new todo title and clear the input
  const todoInput = document.querySelector("#newtodo");
  const newTodo = todoInput.value;
  todoInput.value = '';

  // Add the new todo
  myList.projects[myList.selectedProject].addTodo(newTodo);

  // Rewriter the todo list
  writeList(myList);
}

function deleteItem(event) {
  // Grab item type and ID
  if (event.target.dataset.project) {
    myList.deleteProject(myList, event.target.dataset.project);
  } else if (event.target.dataset.todo) {
    const project = document.querySelector("#todos").dataset.project;
    myList.projects[project].deleteTodo(myList.projects[project], event.target.dataset.todo);
  }

  writeList(myList);
}

// Write the initial list
writeList(myList);