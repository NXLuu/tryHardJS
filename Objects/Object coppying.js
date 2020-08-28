/* 
    Sự khác nhau giữa primitive và objects là object được lưu trữ và copy theo tham chiếu.
*/
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

// So sánh giữa 2 obj - chúng sẽ bằng nhau néu chúng co cùng một tham chiếu

/* 
    Cloning and merging, Object.assign
    - Copy bằng cách tạo mới một object
    Object.assign(dest, [src1, src2, src3...])
*/
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }


