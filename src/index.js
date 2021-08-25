import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import addNewItem from './addTodo.js';
import clearCompletedTodos from './clearCompletedTodos.js';
import removeTodo from './removeTodo.js';
import editTodo from './editTodo.js';
import completeTask from './completeTask.js';
import displayTodos from './displayTodos.js';

const addNewTodo = document.querySelector('.addNewTodo');
const todoList = document.querySelector('#todoList');
const clearCompleted = document.querySelector('#clearCompleted');
const todos = JSON.parse(localStorage.getItem('todos')) || [];

function refreshUI() {
  todoList.innerHTML = '';
  /* eslint-disable */
  diplayTodoList();
  /* eslint-enable */
}

function diplayTodoList() {
  displayTodos(todoList);

  const checkBoxes = document.querySelectorAll('.checkTodo');
  checkBoxes.forEach((check) => {
    check.addEventListener('change', (e) => {
      const node = e.target.parentNode;
      const todoObject = todos.find((todo) => todo.index === Number(node.id));
      const index = todos.indexOf(todoObject);

      if (!todos[index].completed) {
        completeTask(todos, index);
        node.children[1].classList.add('completeTask');
      } else {
        completeTask(todos, index);
        node.children[1].classList.add('completeTask');
      }
      refreshUI();
    });
  });

  const contentEditables = document.querySelectorAll('#editDescription');
  contentEditables.forEach((btn) => {
    btn.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && e.target.textContent) {
        const todoObject = todos.find((todo) => todo.index === Number(e.target.parentNode.id));
        const index = todos.indexOf(todoObject);
        editTodo(todos, index, e.target.textContent);
        refreshUI();
      }
    });
  });

  const deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const todoObject = todos.find((todo) => todo.index === Number(e.target.parentNode.id));
      removeTodo(todos, todoObject);
      refreshUI();
    });
  });
}

addNewTodo.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNewItem(todos, addNewTodo.value);
    refreshUI();
    addNewTodo.value = '';
  }
});

clearCompleted.addEventListener('click', () => {
  const todosArray = JSON.parse(localStorage.getItem('todos'));
  clearCompletedTodos(todosArray);
  refreshUI();
});

window.onload = () => { diplayTodoList(); };