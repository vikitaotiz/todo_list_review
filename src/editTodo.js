export default (todosArray, index, todoString) => {
  if (todosArray.length && todosArray[index] && todoString) {
    todosArray[index].description = todoString;
    return true;
  }
  return false;
};
