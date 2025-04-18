// return true if parameter is a primitive, or false otherwise
export function isPrimitive(x) {
    if(typeof x === 'string' || typeof x === 'number' || typeof x === 'boolean' || typeof x === 'undefined' || typeof x === 'symbol' || typeof x === 'bigint' || typeof x === 'null') {
        return true;
    }
    return false;
}
