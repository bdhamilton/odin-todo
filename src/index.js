import todoList from "./manageTodos";
import { writeList } from "./displayTodos";

const myList = new todoList();

myList.addProject("test");
myList.projects[1].addTodo("test todo");
myList.projects[1].addTodo("another test");
myList.projects[1].addTodo("yet another test");
myList.projects[1].todos[1].toggleComplete();

myList.selectProject(1);

writeList(myList);

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

document.querySelector("#addproject").addEventListener("click", addProject);

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

document.querySelector("#addtodo").addEventListener("click", addTodo);
