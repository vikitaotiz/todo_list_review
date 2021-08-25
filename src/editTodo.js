export default (todosArray, index, todoString) => {
  if (todosArray.length && index !== -1 && todoString) {
    todosArray[index].description = todoString;
    localStorage.setItem('todos', JSON.stringify(todosArray));
    return true;
  }
  return false;
};
