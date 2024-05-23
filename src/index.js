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