import localStorageMock from './__mock__/storage.js';

export default (todos, todo) => {
  if (todo.trim()) {
    const index = todos.length;
    todos.push({ description: todo, completed: false, index });
    localStorageMock.setItem('todos', todos);
    return todos;
  }
  return todos;
};
