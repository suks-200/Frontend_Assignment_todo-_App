// script.js
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');
let selectedTodo = null;

// Function to add a new todo item
addTodoButton.addEventListener('click', () => {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const listItem = document.createElement('li');

    const textNode = document.createTextNode(todoText);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', () => {
      listItem.remove();
      if (selectedTodo === listItem) selectedTodo = null;
    });

    listItem.addEventListener('click', () => {
      if (selectedTodo) {
        selectedTodo.classList.remove('selected');
      }
      selectedTodo = listItem;
      listItem.classList.add('selected');
    });

    listItem.appendChild(textNode);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    todoInput.value = '';
  } else {
    alert('Please enter a task!');
  }
});
