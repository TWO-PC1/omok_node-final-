const myMap = new Map();

myMap.set('키1', '값1');
myMap.set('키2', '값2');
myMap.set('키3', '값3');

myMap.forEach((값, 키,i) => {
  console.log(`키: ${키}, 값: ${값},값${i}`);
});