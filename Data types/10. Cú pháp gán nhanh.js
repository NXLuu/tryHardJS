/* 
    - Destrucring assignment là một cú pháp đặc biệt cho phép chúng ta gán kiểu bố đời
    - Array destructuring:
        let [bien1, bien2, bien3] = mảng;
    -> bien1 = arr[0], bien2 = arr[1],...


*/
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

/* 
    The rest ...
*/

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(name1); // Julius
alert(name2); // Caesar
// Note that type of `rest` is Array.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

/* 
    objedt destructuring 
    let {var1, var2} = {var1:…, var2:…}
*/

let options = {
  title: "Menu",
  width: 100,
  height: 200
};
let {title, width, height} = options;
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

// changed the order in let {...}
let {height, width, title} = { title: "Menu", height: 200, width: 100 }
let options = {
  title: "Menu",
  width: 100,
  height: 200
};
// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;
// width -> w
// height -> h
// title -> title
alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200

let options = {
  title: "Menu"
};
let {width = 100, height = 200, title} = options;
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
