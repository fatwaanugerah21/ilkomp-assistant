export const insertionSort = ({
  array = null,
  sortParameter = null,
  sortOrder = "asc",
  limit = null,
}) => {
  var min = 0;
  if (sortParameter) {
    for (let i = 0; i < array.length - 1; i++) {
      min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j][sortParameter] < array[min][sortParameter]) {
          min = j;
          // Swapping number StackOverflow way
        }
      }
      array[i] = [array[min], (array[min] = array[i])][0];
    }
    if (sortOrder === "asc") {
      return limit === null ? array : array.slice(0, limit);
    }
    array = array.reverse();
    return limit === null ? array : array.slice(0, limit);
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }

      array[i] = [array[min], (array[min] = array[i])][0];
    }
    if (sortOrder === "asc") {
      return limit === null ? array : array.slice(0, limit);
    }
    array = array.reverse();
    return limit === null ? array : array.slice(0, limit);
  }
};
