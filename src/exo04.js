export function spyOnProperty(obj, prop, onRead, onWrite) {
  // change the descriptor of property `prop` of `obj`:
  // - call onRead() when property is accessed
  // - call onWrite(newValue) when property is reassigned
  // these functions are just observers, they do not return anything
  // however it should still be possible to read and write a value for property `prop`
  let value = obj[prop];

  Object.defineProperty(obj, `${prop}`, {
    get() {
      onRead(); 
      return value; 
    },
    set(newValue) {
      onWrite(newValue); 
      value = newValue; 
    },
    enumerable: true,
    configurable: true,
  })  
}

export function setPrivatesAndConstants(obj) {
  const props = Object.getOwnPropertyNames(obj);

  for (const key of props) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, key);

    if (key.startsWith("_")) {
      descriptor.enumerable = false; 
    }

    if (key === key.toUpperCase()) {
      descriptor.writable = false; 
      descriptor.configurable = false; 
    }

    Object.defineProperty(obj, key, descriptor); 
  }
}
