export default (todosArray, todoObject) => {
  if (todosArray.length && todoObject) {
    const index = todosArray.indexOf(todoObject);
    todosArray.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todosArray));
    return true;
  }
  return false;
};