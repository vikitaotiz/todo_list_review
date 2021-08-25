export default (todosArray) => {
  const itemsToBeDeleted = todosArray.filter((val) => val.completed);
  if (itemsToBeDeleted.length) {
    itemsToBeDeleted.forEach((val) => {
      const index = todosArray.indexOf(val);
      todosArray.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(todosArray));
    });
    return true;
  }
  return false;
};