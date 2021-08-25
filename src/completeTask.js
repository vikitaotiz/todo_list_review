export default (todosArray, index) => {
  if (todosArray.length && index !== -1) {
    todosArray[index].completed = !todosArray[index].completed;
    localStorage.setItem('todos', JSON.stringify(todosArray));
    return true;
  }
  return false;
};