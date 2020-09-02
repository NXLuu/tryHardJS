/* 
    CÓ 5 methods của Promise
    1. let promise = Promise.all([...promises...]);
        - Chờ tất cả các promise resolve và trả về một mảng các giá trị của chúng. Nếu một trong số các promise reject thì toàn bộ các kết quả đều không tính
    2. let promise = Promise.allSettled([...promise..,])
        - Chờ tất cả các promises ổn định (Có thể resolve hoặc reject) - trả vể một mảng các object {status: (fulfiled/rejected), value:/reason:}
    3. Promise.race(promise) 
        Chờ cho promise đầu tiên ổn đinh và trả về result hoặc  error
    4. Promise.resolve(value)
        - Tạo một promise đã được resolve với giá trị value
    5. Promise.reject(error) - 
        - Tạo một promise đã reject với lỗi error
*/
// Promise.all ---------------------
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member
