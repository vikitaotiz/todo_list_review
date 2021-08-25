import addNewItem from './addTodo.js';

require('jest-localstorage-mock');
/* eslint-disable */
const todos = localStorage.__STORE__['todos'] || [];
/* eslint-disable */

describe('Add todo method', () => {
  test('adds new todo', () => {
  expect(addNewItem(todos, '')).toBe(false);
});

test('adds new todo', () => {
  expect(addNewItem(todos, 'New todo')).toBe(true);
});
});

