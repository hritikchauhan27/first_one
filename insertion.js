//************* Insertion sort using reduce method **********/

let myfun= (acc, cur) => {
    const index = acc.findIndex(item => item > cur);
    const pos = index === -1 ? acc.length : index;
    return [...acc.slice(0, pos), cur, ...acc.slice(pos)];
  }

const insertionSort = arr => arr.reduce(myfun, []);

console.log(insertionSort([91, 4, 6, 24, 8, 7, 59, 3, 13, 0]));