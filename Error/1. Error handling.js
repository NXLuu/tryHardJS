/* 
    Thông thường nếu có một lỗi xảy ra, thì script sẽ ngay lập tức dừng lại.
    try..catch cho phép chúng ta bắt lỗim do đó script thay vì chết luông thì vẫn có thể làm một số thứ (thống báo lỗi ra màn hình)
*/

/* 
    "try...catch" syntax
    // Lỗi ở try sẽ không ngắt chương trình mà nó có khả năng được sử lý ở catch
*/

try {

  // code...

} catch (err) {

  // error handling

} finally {
  alert( 'finally' );
}

//Ex--------------
try {
  alert('Start of try runs');  // (1) <--
  lalala; // error, variable is not defined!
  alert('End of try (never reached)');  // (2)
} catch(err) {
  alert(`Error has occurred!`); // (3) <--
}

/* 
    Error Object:
        Khi một lỗi xảy ra, JS sẽ tạo ra một obj chứa thông tin và nó
    err.name
    err.message
    err.stack
    - throw: tạo ra một lỗi và truyền nó cho hàm catch 
    throw <error object>
*/

let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }
  alert( user.name );
} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
}