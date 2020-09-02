let func = new Function ([arg1, arg2, ...argN], functionBody);
let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3

new Function('a', 'b', 'return a + b'); // basic syntax
new Function('a,b', 'return a + b'); // comma-separated
new Function('a , b', 'return a + b'); // comma-separated with spaces