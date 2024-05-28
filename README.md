# odin-todo
A todo list for The Odin Project

## Versions

### v4: Design the UI

- [ ] The header should look nice.
- [ ] The project list should look nice.
  - [ ] It should be clear which project is selected.
  - [ ] The input for adding projects should be clearly differentiated.
  - [ ] The delete project button should be clear but not overpowering.
- [ ] The todo list should look nice.
  - [ ] The toggle buttons should be easily to see and click.
  - [ ] The extra detail should be easy to read but not overpowering.

### v3: Add more detailed functionality

I want to add support now, first in the internal logic and then in the UI, for descriptions, due dates, and priority markers. Some of this ground has already been paved in the internal logic but will need to be fleshed out. Some of the UI might need to be updated to accommodate the extra information.

- [X] Change todo display to include separate completed button.
- [X] UI should display extra properties if they exist.
  - [X] Description
  - [X] Priority
  - [X] Due date
- [X] It should be able to toggle priority on and off.
- [X] It should have a way to edit titles.
- [X] It should have a way to edit descriptions.
- [X] It should have a way to edit due dates.

### v2: Create a basic working UI

This first version of the UI should be able to add, complete, and delete todos in various projects. It will not yet be able to access or edit extra features, like descriptions, due dates, or priority.

- [X] It should display current projects.
- [X] It should display todos in a selected project.
- [X] It should have a way to add new projects.
- [X] It should have a way to add new todos to a selected project.
- [X] It should have a way to delete projects
- [X] It should have a way to delete todos.
- [X] It should have a way to toggle todos complete.
- [X] It should have a way to switch between projects being displayed.

### v1: Write up core logic in its own module

Created a manageTodos module that contains classes and relevant methods for todos and projects and a master object containing the whole todo list. 