
const sayHello = () => "Hello World!";
const suma = (a, b) => {
if (typeof a !== "number" || typeof b !== "number") {
  throw new Error("Both arguments must be numbers");
}
return a + b;
}
module.exports = { sayHello, suma };