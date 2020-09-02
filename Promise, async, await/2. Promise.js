/* 
    Promise là một JS obj đặc biệt 
    - Cái mà liên kết giữa code đang chạy và code cần kết quả đang chạy
    - Code sản xuất  thì cần thời gian để tạo ra promised result và promise làm giá  trị đó  tới tất cả subcribed code khi nó sãn sàng
    - promise đươc trả lại vởi new Promise constructor sẽ có 2 thuộc tính :
    - state(trạng thái):
        1. pending(Giá trị khởi đầu) - đang chờ
        2. fulfilled - đã hoàn thành - resolve được gọi
        3. rejected - Bị từ trối - reject được gọi
    -result:
        1. undfined
        2. value
        3. error

*/

// Syntax-------------------------
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});
/* 
    2 Tham số resolve và reject là những call backs được cung cấp bới JS
    - resolve(value) - nếu công việc hoàn thành, nó sẽ gọi hàm  cùng với value-> trả về result = value cho promise
    - reject(error) - Nếu lỗi xảy ra, error là lỗi của obj
*/


/* 
    then, catch, finally
    - then:
        1. Tham số đầu tiên là một hàm chạy khi promise là resolve và nhận được kết quả
        2. Tham số thứ 2 là một hàm chạy khi promise là rejected và nhận được một lỗi
    - catch: Nếu chúng ta chỉ quan tâm đến lỗi - catch(f) = then(null, f)
    - finally: 
        1. Nó không có tham số, Chúng ta không biết là promise có thành công hay không
        2. Nó chạy khi promise phía trước hoàn thành

*/
// then
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);


let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});
// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);

/* 
    So sánh promise và callbacks:
    - Nó cho phép chúng ta chạy mọi thứ giống với thự nhiên
    - Chúng ta có thê gọi .then nhiều lần chúng ta muốn
*/
