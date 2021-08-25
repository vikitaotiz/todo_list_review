import 'jest-localstorage-mock';
import addNewItem from './addTodo.js';
import { removeTodo, todoObject, todoObject2 } from './removeTodo.js';

const todos = localStorage.__STORE__.todos || [];

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
});
