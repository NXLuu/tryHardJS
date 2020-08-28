/* 
    The optional chaining ?. sẽ trả về undefinded  nếu phần đứng  trước ?. là undefied hoặc null 

*/
let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)