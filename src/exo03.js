// return an object with values and keys inverted
// we assume all values to be strings
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  let keysArray = [];
  let valuesArray = [];
  let invertedObj = {};
  for (let key in obj) { 
    keysArray.push(key);
    valuesArray.push(obj[key]);
  }
  for(let i = 0; i < valuesArray.length; i++) { 
    invertedObj[valuesArray[i]] = keysArray[i];
  }
  return invertedObj; 
}
