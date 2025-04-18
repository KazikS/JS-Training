export function parseUserData(data = {}) {
  // TODO: return a new object with the properties of data
  // and these values applied as default for missing properties :
  const defaults = { name: "Anonymous", isAdmin: false };

  //Variant 1
  // let newData = Object.assign(defaults, data);

  //Variant 2
  // let newData = {...defaults, ...data};

  //Variant 3
  // const {name = defaults.name, isAdmin = defaults.isAdmin, age} = data;
  // 1 - using Object.assign
  // 2 - using spread operator on properties
  // 3 - using destructuring and default parameters for parseUserData

  return {name, isAdmin, age};
}