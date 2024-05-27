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
      nextListItem.dataset.project = i;
      
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
      // Each todo should have: complete button, title, description, 
      // due date, priority button, and delete button (in that order).

      // <li data-project="0">
      //   <button class="toggle-complete">[✓]</button>
      //   <strong>Title of Todo</strong>
      //   <div class="description"><span>Description:</span> Short description.</div>
      //   <div class="due-date"><span>Due:</span> Due date</div>
      //   <button class="priority">[!]</button>
      //   <button class="delete">[X]</button>
      // </li>

      // Simplify our variable name.
      const thisTodo = project.todos[i];

      // Create all the elements with necessary attributes and contents.
      const nextTodo = document.createElement("li");
      nextTodo.dataset.todo = i;
      if (thisTodo.completed) nextTodo.classList.add("complete");

      const todoComplete = document.createElement("button");
      todoComplete.classList.add("toggle-complete");
      todoComplete.innerText = thisTodo.completed ? "[✓]" : "[ ]";

      const todoTitle = document.createElement("strong");
      todoTitle.innerText = thisTodo.title;

      const todoDescription = document.createElement("div");
      todoDescription.classList.add("description");
      const description = thisTodo.description ? thisTodo.description : "No description.";
      todoDescription.innerHTML = `<span>Description:</span> ${description}`;
      
      const todoDue = document.createElement("div");
      todoDue.classList.add("due-date");
      const due = thisTodo.due ? thisTodo.due : "No due date.";
      todoDue.innerHTML = `<span>Due:</span> ${due}`;

      const todoPriority = document.createElement("button");
      todoPriority.classList.add("priority");
      if (thisTodo.priority === true) todoPriority.classList.add("priority-high");
      todoPriority.innerText = thisTodo.highPriority ? "[!]" : "[ ]";

      const todoDelete = document.createElement("button");
      todoDelete.classList.add("delete");
      todoDelete.innerText = "X";

      // Write everything to the DOM
      nextTodo.appendChild(todoComplete);
      nextTodo.appendChild(todoTitle);
      nextTodo.appendChild(todoDescription);
      nextTodo.appendChild(todoDue);
      nextTodo.appendChild(todoPriority);
      nextTodo.appendChild(todoDelete);
      todoList.appendChild(nextTodo);

      // Add IDs to everything
      // ()
      
      // const nextTodo = document.createElement("button");
      // nextTodo.classList.add("todo-button");
      // nextTodo.dataset.todo = i;
      // if (project.todos[i].completed === true) {
      //   nextTodo.classList.add("complete");
      // }
      // nextTodo.innerText = project.todos[i].title;
      
      // const deleteButton = document.createElement("button")
      // deleteButton.innerText = "Delete";
      // deleteButton.dataset.todo = i;
      // deleteButton.classList.add("delete");
  
      // nextListItem.appendChild(nextTodo);
      // nextListItem.appendChild(deleteButton);
      // todoList.appendChild(nextListItem);
    }
  
    setListeners();
  }
  
  // Listen for changes from the user.
  function setListeners() {
    // Listen for any clicks on a todo li
    const items = document.querySelectorAll("#todos li, #projects li");
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener("click", routeEvent);
    }

    // Listen for add buttons 
    document.querySelector("#addproject").addEventListener("click", addProject);
    document.querySelector("#addtodo").addEventListener("click", addTodo);
  
    // // Listen for delete buttons
    // const deleteButtons = document.querySelectorAll(".delete");
    // for (let i = 0; i < deleteButtons.length; i++) {
    //   deleteButtons[i].addEventListener("click", deleteItem);
    // }
  
    // // Listen for project switching
    // const projectButtons = document.querySelectorAll(".project-button");
    // for (let i = 0; i < projectButtons.length; i++) {
    //   projectButtons[i].addEventListener("click", selectProject);
    // }
  
    // // Listen for todo completion
    // const todoButtons = document.querySelectorAll(".todo-button");
    // for (let i = 0; i < todoButtons.length; i++) {
    //   todoButtons[i].addEventListener("click", completeTodo);
    // }
  }

  function routeEvent(event) {
    if (event.currentTarget.dataset.project) {
      console.log(`You clicked on project ${event.currentTarget.dataset.project}.`);
    }

    else if (event.currentTarget.dataset.todo) {
      const todoID = event.currentTarget.dataset.todo;

      if (event.target.classList.contains())


      console.log(`You clicked on todo ${todoID}.`);
      console.log(event.target.classList.contains("due-date"));
    }
  }
  
  // Handle requests to add a project.
  function addProject() {
    // Grab new project title
    const projectInput = document.querySelector('#newproject');
    const newProject = projectInput.value;

    // If nothing has been entered, quit.
    if (newProject === '') return;

    // Otherwise, blank the field and add it to the project list.
    projectInput.value = '';
    list.addProject(newProject);
  
    // Select the newly created list and update
    list.selectProject(list.projects.length-1);
    updateList();
  }
  
  // Handle requests to add a todo to a particular project.
  function addTodo() {
    // Grab new todo title
    const todoInput = document.querySelector("#newtodo");
    const newTodo = todoInput.value;

    // If nothing has been entered, quit.
    if (newTodo === '') return;

    // Otherwise, blank the field and add it to the project
    todoInput.value = '';
    list.projects[list.selectedProject].addTodo(newTodo);

    // Rewrite the todo list
    updateList();
  }
  
  // Handle requests to deal with either a project or a todo.
  function deleteItem(event) {
    // If a project has been selected:
    if (event.target.dataset.project) {
      // Delete it.
      list.deleteProject(list, event.target.dataset.project);
    } 
    
    // If a todo has been selected:
    else if (event.target.dataset.todo) {
      // Delete it from the selected project.
      const project = list.projects[list.selectedProject];
      project.deleteTodo(project, event.target.dataset.todo);
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