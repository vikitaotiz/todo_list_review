export default (todos, todo) => {
  if (todo.trim()) {
    const index = todos.length + 1;
    todos.push({ description: todo, completed: false, index });
    localStorage.setItem('todos', JSON.stringify(todos));
    return true;
  }
  return false;
};
