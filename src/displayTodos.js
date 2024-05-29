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
      if (list.selectedProject === i) {
        nextListItem.classList.add("selected");
      }

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
      // Simplify our variable name.
      const thisTodo = project.todos[i];

      // Create all the elements with necessary attributes and contents.
      const nextTodo = document.createElement("li");
      nextTodo.dataset.todo = i;
      if (thisTodo.completed) nextTodo.classList.add("complete");

      const todoComplete = document.createElement("button");
      todoComplete.classList.add("toggle-complete");
      todoComplete.innerText = thisTodo.completed ? "[✓]" : "[ ]";

      const todoInfo = document.createElement("div");
      todoInfo.classList.add("todo-text");

      const todoTitle = document.createElement("strong");
      todoTitle.innerText = thisTodo.title;

      const todoDue = document.createElement("div");
      todoDue.classList.add("due-date");
      const dueDate = thisTodo.dueDate ? thisTodo.dueDate : "No due date.";
      todoDue.innerHTML = `<span>Due:</span> ${dueDate}`;

      const todoDescription = document.createElement("div");
      todoDescription.classList.add("description");
      const description = thisTodo.description ? thisTodo.description : "No description.";
      todoDescription.innerHTML = `<span>Description:</span> ${description}`;
      
      const todoPriority = document.createElement("button");
      todoPriority.classList.add("priority");
      if (thisTodo.highPriority === true) {
        todoPriority.classList.add("priority-high");
      }
      todoPriority.innerText = "!";

      const todoDelete = document.createElement("button");
      todoDelete.classList.add("delete");
      todoDelete.innerText = "X";

      // Write everything to the DOM
      nextTodo.appendChild(todoComplete);

      todoInfo.appendChild(todoTitle);
      todoInfo.appendChild(todoDue);
      todoInfo.appendChild(todoDescription);
      nextTodo.appendChild(todoInfo);

      nextTodo.appendChild(todoPriority);
      nextTodo.appendChild(todoDelete);
      todoList.appendChild(nextTodo);
    }
  
    setListeners();
  }
  
  // Listen for changes from the user.
  function setListeners() {
    // Listen for any clicks on a project or todo
    const items = document.querySelectorAll("#todos li, #projects li");
    for (let i = 0; i < items.length; i++) {
      // And send them to a handler
      items[i].addEventListener("click", handleClicks);
    }

    // Listen for add buttons 
    document.querySelector("#addproject").addEventListener("click", addProject);
    document.querySelector("#newproject").addEventListener("keypress", (event) => {
      if (event.key === "Enter") addProject();
    });
    document.querySelector("#addtodo").addEventListener("click", addTodo);
    document.querySelector("#newtodo").addEventListener("keypress", (event) => {
      if (event.key === "Enter") addTodo();
    });
  }

  // Decide what to do depending on where the user clicked.
  function handleClicks(event) {
    if (event.currentTarget.dataset.project) {
      // First handle project interactions.
      const projectId = Number(event.currentTarget.dataset.project);

      // Either select or delete the project
      if (event.target.classList.contains('project-button')) {
        list.selectProject(projectId);
        updateList();
      } else if (event.target.classList.contains('delete')) {
        // If we're deleting the current project,
        // switch back to the default project first.
        if (list.selectedProject === projectId) {
          list.selectProject(0);
        }
        list.deleteProject(list, projectId);
        updateList();
      }
    } else if (event.currentTarget.dataset.todo) {
      // Then handle todo interactions.
      const todoId = Number(event.currentTarget.dataset.todo);
      const project = list.projects[list.selectedProject];    const classList = event.target.classList;
      const todo = project.todos[todoId];

      if (classList.contains('toggle-complete')) {
        todo.toggleComplete();
        updateList();
      } else if (classList.contains('priority')) {
        todo.togglePriority();
        updateList();
      } else if (classList.contains('delete')) {
        project.deleteTodo(project, todoId);
        updateList();
      } else if (classList.contains('description')) {
        // Create a new input element
        const editDescription = document.createElement('input');
        editDescription.value = todo.description || '';
        if (!todo.description) editDescription.placeholder = 'Add a description';
        editDescription.classList.add('edit-description');
        editDescription.dataset.todo = todoId;

        // Replace the current title with the new input
        const currentDescription = event.currentTarget.querySelector('.description');
        currentDescription.innerHTML = '';
        currentDescription.appendChild(editDescription);

        // Focus on it, and set up an event listener
        editDescription.focus();
        editDescription.addEventListener('focusout', updateTodoDescription);      
        editDescription.addEventListener('keypress', (event) => {
          if (event.key === "Enter")  {
            editDescription.removeEventListener('focusout', updateTodoDescription);
            updateTodoDescription();
          }
        });  
      } else if (classList.contains('due-date')) {
        // Create a new input element
        const editDueDate = document.createElement('input');
        editDueDate.type = 'date';
        editDueDate.classList.add('edit-duedate');
        editDueDate.dataset.todo = todoId;

        // Replace the current title with the new input
        const currentDueDate = event.currentTarget.querySelector('.due-date');
        currentDueDate.innerHTML = '';
        currentDueDate.appendChild(editDueDate);

        // Focus on it, and set up an event listener
        editDueDate.focus();
        editDueDate.addEventListener('focusout', updateTodoDueDate);   
        editDueDate.addEventListener('keypress', (event) => {
          if (event.key === "Enter")  {
            editDueDate.removeEventListener('focusout', updateTodoDueDate);
            updateTodoDueDate();
          }
        });
      } else {
        // Create a new input element
        const editInput = document.createElement('input');
        editInput.value = todo.title;
        editInput.classList.add('edit-title');
        editInput.dataset.todo = todoId;

        // Replace the current title with the new input
        const currentTitle = event.currentTarget.querySelector('strong');
        currentTitle.after(editInput);
        currentTitle.remove();

        // Focus on it, and set up an event listener
        editInput.focus();
        editInput.addEventListener('focusout', updateTodoTitle);
        editInput.addEventListener('keypress', (event) => {
          if (event.key === "Enter")  {
            editInput.removeEventListener('focusout', updateTodoTitle);
            updateTodoTitle();
          }
        });
      }
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

  // When the user enters a new todo title, update it and update the app.
  function updateTodoTitle() {
    const todoInput = document.querySelector('.edit-title');
    const thisTodo = list.projects[list.selectedProject].todos[todoInput.dataset.todo];
    thisTodo.update('title', todoInput.value);

    updateList();
  }

   // When the user enteres a new todo description, update it and update the app.
   function updateTodoDescription() {
    const todoInput = document.querySelector('.edit-description');
    const thisTodo = list.projects[list.selectedProject].todos[todoInput.dataset.todo];
    thisTodo.update('description', todoInput.value);

    updateList();
  }

  // When the user enteres a new todo due date, update it and update the app.
  function updateTodoDueDate() {
    const todoInput = document.querySelector('.edit-duedate');
    const thisTodo = list.projects[list.selectedProject].todos[todoInput.dataset.todo];
    thisTodo.update('dueDate', todoInput.value);

    updateList();
  }  
}

export default displayTodos;