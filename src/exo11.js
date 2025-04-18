export function deduplicateArray(arr) {
  // TODO: remove duplicate values in the array and return the filtered array
  // 1 - with filter and indexOf methods
  // let uniqueArr = arr.filter((item, pos) => {
  //   return arr.indexOf(item) == pos
  // })

  // 2 - with a Set and spread operator
  let uniqueArr = [...new Set(arr)];

  return uniqueArr;
}

export function getPropertyFromValue(obj, val) {
  // TODO: return the name of the first property of `obj` with value `val`, or null if not found
  // 1 - with find and Object.keys methods
  // let prop = Object.keys(obj).find(key => obj[key] == val);

  // 2 - with a Map and Object.entries

  

  return prop || null;
}
