import addNewItem from './addTodo.js';
import removeTodo from './removeTodo.js';

const todoObject = { description: 'New todo', completed: false, index: 1 };
const todoObject2 = { description: 'New todo 2', completed: false, index: 1 };


require('jest-localstorage-mock');
/* eslint-disable */
const todos = localStorage.__STORE__['todos'] || [];
/* eslint-disable */

describe('Add todo method', () => {
  test('add empty todo', () => {
    expect(addNewItem(todos, '')).toBe(false);
  });

  test('add new todo', () => {
    expect(addNewItem(todos, 'New todo')).toBe(true);
  });
});

describe('remove method', () => {
  test('remove single todo', () => {
    expect(removeTodo(todos, todoObject)).toBe(true);
  });
  test('should not remove non existing task', () => {
    expect(removeTodo(todos, todoObject2)).toBe(false);
  });
  
})

