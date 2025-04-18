// try to solve the exercise using spread and rest operators

// TODO: return an object with properties being the list of received arguments,
// and the number of times each argument has been received as values
export function count(...arg) {
  let myObj = {};
  arg.forEach((el) => {
    if (myObj[el]) {
      myObj[el]++;
    } else {
      myObj[el] = 1;
    }
  });
  return myObj;
}

// example:
count("Carrot", "Cabbage", "Potato", "Cabbage", "Cabbage", "Carrot");
// { Carrot: 2, Cabbage: 3, Potato: 1 }

// TODO: return the argument that occurs the most times in the argument list
export function mostFrequentIn(...args) {
  let myObj = {};
  args.forEach((el) => {
    if (myObj[el]) {
      myObj[el]++;
    } else {
      myObj[el] = 1;
    }
  });
  let max = 0;
  let ans;
  for (let key in myObj) {
    if (myObj[key] > max) {
      max = myObj[key];
      ans = key;
    }
  }
  return ans;
}

// example:
// mostFrequentIn(
//   "Carrot",
//   "Cabbage",
//   "Potato",
//   "Cabbage",
//   "Cabbage",
//   "Carrot"
// ) === "Cabbage";
