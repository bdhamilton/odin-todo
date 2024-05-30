import todoList from "./manageTodos";
import displayTodos from "./displayTodos";
import './c.css';

// If there's a stored list, grab it.
const storedList = JSON.parse(localStorage.getItem("list"));

// Build our new todo list (with stored values if necessary).
const list = new todoList(storedList);

// Start the app
displayTodos(list);

// Save our list to memory before leaving.
window.addEventListener('beforeunload', () => {
  localStorage.setItem("list", JSON.stringify(list));
  console.log("stored!");
});