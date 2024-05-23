import todoList from "./manageTodos";
import { displayProjects, displayTodos } from "./displayTodos";

const myList = new todoList();

myList.addProject("test");
myList.projects[1].addTodo("test todo");
myList.projects[1].addTodo("another test");
myList.projects[1].addTodo("yet another test");
myList.projects[1].todos[1].toggleComplete();

displayProjects(myList);
displayTodos(myList.projects[1]);