const addToArray = (array: any, item: any) => {
  array.push(item);
  return array;
};

const removeFromArray = (array: any, item: any) => {
  const index = array?.indexOf(item);
  if (index != -1) {
    array.splice(index, 1);
  }
  return array;
};

const arrayContains = (array: any, item: any) => {
  return array?.includes(item);
};

export {addToArray, removeFromArray, arrayContains};
