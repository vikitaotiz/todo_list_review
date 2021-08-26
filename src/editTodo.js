export default (todosArray, index, todoString) => {
  if (todosArray.length && index !== -1 && todoString) {
    todosArray[index].description = todoString;
    return true;
  }
  return false;
};
