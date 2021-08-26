export default (todosArray, index) => {
  if (todosArray.length && todosArray[index]) {
    todosArray[index].completed = !todosArray[index].completed;
    return true;
  }
  return false;
};