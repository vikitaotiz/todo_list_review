export default (todosArray, index, todoString) => {
  if (todosArray.length && index && todoString) {
    todosArray[index].description = todoString;
    return true;
  }
  return false;
};
