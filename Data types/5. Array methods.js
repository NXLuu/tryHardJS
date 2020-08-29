/*
    arr.push(...items) – thêm vào cuối,
    arr.pop() – extracts an item from the end,
    arr.shift() – extracts an item from the beginning,
    arr.unshift(...items) – adds items to the beginning.

    arr.splice(index[, deleteCount, elem1, ..., elemN])
    arr.slice(start, end) - tạo một mảng mới copy từ vị trí start đến end
    arr.concat(...items) - trả về một mảng mới copy tất cả các phần tử hiện tại và thêm items
    
    ------Search
    indexOf/lastIndexOf(item, pos) - tìm kiếm item bắt đầu từ vị trí pos, trả về index hoặc -1 nếu không tìm thấy

    includes(value) - trả về true nếu arr có value và false nếu không

    find/filter(func) - lọc các phần tử theo hàm và trả về phần tử đầu tiên/ tất cả (phần tử mà làm cho hàm true)

    -------Loop
    forEach(func) - gọi hàm func  với tất cả các phần tử không trả về cái gì

    -------transform
    map(func) - tạo một mảng mới từ kết quả gọi hàm func

    sort(func) - sort arr

    reverse() - đảo ngược và trả về mảng

    split/join - chuyên đổi một string sang arr và ngược lại

    reduce(func, initial) - tính toán một giá trị bằng cách gọi func với tất cả phần tử và chuyền vào kết quả trước khi gọi


*/

let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
alert( arr ) // now ["Let's", "dance", "right", "now"]
let removed = arr.splice(0, 2);
alert( removed ); // "I", "study" <-- array of removed elements

let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3
alert( arr.slice(-2) ); // s,t (copy from -2 till the end)


let arr = [1, 2];
// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // John

let names = 'Bilbo, Gandalf, Nazgul';
let arr = names.split(', ');
for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';'); // glue the array into a string using ;
alert( str ); // Bilbo;Gandalf;Nazgul


let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);