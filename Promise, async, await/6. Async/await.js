/* 
    async/await
*/

/* 
    Async functoins
    - đặt từ khoá async trước một hàm
    async function f() {
        return 1;
    }
    -> hàm này sẽ luôn luôn trả về một promise. Các giá  trị sẽ tự động được wrap trong một resolved promise


*/
// Ví dụ asycn function ----------
async function f() {
  return 1;
}

f().then(alert); // 1

/* 
    Từ khoá await làm JS sẽ chờ cho tớ khi promise ổn đính và trả về kết quả
    - await sẽ tạm  dừng hàm cho tới khi promise được thực hiện
    - await chỉ được sử dụng trong async funtion

*/

// Ví dụ về await
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });
  let result = await promise; // wait until the promise resolves (*)
  alert(result); // "done!"
}

f();