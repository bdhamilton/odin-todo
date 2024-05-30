# get.organized

A basic todo app, with the ability to maintain separate project lists.

## Known issues

- [ ] App header breaks on mobile
- [ ] No error handling for long inputs or too many inputs
- [ ] Date inputs don't have pulldowns
- [ ] Long project or todo titles break the layout

## Versions

### v5: Store app data on local machine

- [X] App should save to local storage before user leaves
- [X] App should draw from local storage when it first boots up

### v4: Design the UI

- [X] The header should look nice.
- [X] The project list should look nice.
  - [X] It should be clear which project is selected.
  - [X] The input for adding projects should be clearly differentiated.
  - [X] The delete project button should be clear but not overpowering.
- [X] The todo list should look nice.
  - [X] The toggle buttons should be easily to see and click.
  - [X] The extra detail should be easy to read but not overpowering.

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