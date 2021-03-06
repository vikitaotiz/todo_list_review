function removeTodo(todosArray, todoObject) {
  if (todosArray.length && todoObject) {
    const index = todosArray.indexOf(todoObject);
    todosArray.splice(index, 1);
    return todosArray;
  }
  return todosArray;
}

const todoObject = { description: 'New todo', completed: false, index: 1 };
const todoObject2 = { description: 'New todo 2', completed: false, index: 1 };

export { removeTodo, todoObject, todoObject2 };
