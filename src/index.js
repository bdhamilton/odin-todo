import todoList from "./manageTodos";
import { displayProjects, displayTodos } from "./displayTodos";

todoList.addProject("test");
todoList.projects[1].addTodo("test todo");
todoList.projects[1].addTodo("another test");
todoList.projects[1].addTodo("yet another test");
todoList.projects[1].todos[1].toggleComplete();

displayProjects(todoList);
displayTodos(todoList.projects[1]);