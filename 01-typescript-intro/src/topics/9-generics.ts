

export function whatsMyType<T>(argument: T): T {
   return(argument)

}

const amIString = whatsMyType('Hola mundo');
const amINumber = whatsMyType(123);
const amIArray = whatsMyType([1, 2, 3]);

console.log(amIString.split(' ')); // 'Hola mundo'
console.log(amINumber.toFixed()); // 123
console.log(amIArray.join('-')); // [1, 2, 3]