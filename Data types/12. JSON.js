let json = JSON.stringify(value[, replacer, space])
let value = JSON.parse(str, [reviver]);

/* 
    JSON(JS Object Nâttion): Nó là một dạng fomat các giá trị và obj. Rất dễ để có thể sử dụng JSON chuyển dữ liệu cho client và server
    JSON hỗ trợ cho các kiểu dữ liệu sau:
    - object {}
    - array []
    - primitive:
        string 
        numbers
        boolean
        null
    - JSON chỉ chuyển đổi dữ liệu nó sẽ bỏ qua một ôố cacis không cần thiêt như:
        Function properties
        Symbolic properties
        undefined
*/

JSON.stringify() - Chuyển một obj thành JSON
JSON.parse() - Chuyển JSON thành obj

// EX:
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!
alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

/* 
    JSON sử dụng cho các OBJ không có tham chiếu vòng tròn

*/
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};
meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup
JSON.stringify(meetup); // Error: Converting circular structure to JSON