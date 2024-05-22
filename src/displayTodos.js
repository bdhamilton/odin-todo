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
  console.log(`Here are the tasks in your ${project.title} project:`);
  for (let i = 0; i < project.todos.length; i++) {
    let doneMark = project.todos[i].completed === true? "X" : " ";
    console.log(`${i + 1}: [${doneMark}] ${project.todos[i].title}`);
  }
}

export { displayProjects, displayTodos };