/* 
    Trong JS hiện đại có 2 loại Number:
    1. Regular number
    2. bigints
*/

/* 
    Có nhiều cách đẻ viết một number
*/

let billion = 1000000000;
let billion = 1e9; 
let ms = 0.000001;
let ms = 1e-6;

/* Hex, binary, octal numbers */
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides

// Các method
// 1. toString
num.toString(base);
let num = 255;
alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
123456..toString(36);
// Nếu chuyển số trực tiếp thì ta thêm ..

//2. Làm tròn
Math.floor(): làm tròn xuống
Math.ceil(): làm tròn lên
Math.round(): làm tròn tới số nguyên gần nhất
Math.trunc(): Xoá tất cả số sau dấu phẩy
let num = 12.36;
alert( num.toFixed(1) );


/* 
    Tính toán gần đúng
    - Nếu số quá lớn thì nó sẽ chuyển thành Infinity
    - Các số thập phân sẽ được lưu dưới dạng số nhị phân do đó 0.1 sẽ là số vô tận
*/
alert( 0.1 + 0.2 == 0.3 ); // false

// Infinity anđ NaN
isNaN(value);
isFinite(value);

/* 
    parseInt and parseFloat 
    - Chuyển thành số nguyên và số float  

*/
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
alert( parseInt('a123') ); // NaN, the first symbol stops the process

Math.random() // 0 - 1
Math.max(a, b, c...) / Math.min(a, b, c...)
Math.pow(n, power)

set chứa các phần tử độc nhất
Cấu trúc của nó giống với cây nhị phân tìm kiếm - nên nó tìm kiếm nhanh nhất
Để tìm kiếm dùng set.find(Giá trị tìm kiếm) -> trả về iterator. Nếu không tìm thấy trả về set.end()
set.find(value) != set.end() // Tìm thấy value trong set

map hoạt động dùng để lưu dữ liệu theo cặp key:value
Nó cũng là dạng cây nhị phân tìm kiếm
Các phần tử có thể được truy cập gián tiếp bằng operator[]
Ví dụ unordered_map<int, bool> a;
a[1] = true;
(Các giá trị mặc định sẽ là false -> nên có thể một giá trị đã tồn tại chưa a[2] == true // false)

