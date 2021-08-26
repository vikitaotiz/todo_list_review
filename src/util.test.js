import addNewItem from './addTodo.js';
import { removeTodo, todoObject, todoObject2 } from './removeTodo.js';
import localStorageMock from './__mock__/storage.js';
import editTodo from './editTodo.js';

const todos = [];

describe('Add todo method', () => {
  test('add empty todo', () => {
    expect(addNewItem(todos, '')).toHaveLength(0);
  });

  test('add new todo', () => {
    expect(addNewItem(todos, 'New todo')).toHaveLength(1);
  });

  test('add empty todo', () => {
    expect(localStorageMock.getItem('todos')).toHaveLength(1);
  });
});

describe('remove method', () => {
  test('delete should remove a single todo', () => {
    expect(removeTodo(todos, todoObject)).toHaveLength(0);
  });

  test('should empty storage if has only one item', () => {
    expect(localStorageMock.getItem('todos')).toHaveLength(0);
  });

  test('should not remove non existing task', () => {
    expect(removeTodo(todos, todoObject2)).toHaveLength(0);
  });
});

describe('Edit function', () => {
  test('edit single todo', () => {
    addNewItem(todos, 'New todo');
    const todoString = 'Update new todo';
    const index = todos.findIndex(() => todoObject.index);
    expect(editTodo(todos, index, todoString)).toBe(true);
  });

  test('should return true when object in mock is edited', () => {
    const arr = localStorageMock.getItem('todos');
    expect(arr[0].description !== todoObject.description).toBe(true);
  });
});
