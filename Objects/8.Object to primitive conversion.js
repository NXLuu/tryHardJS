/* 
    Việc chuyển đổi kiểu dữ liệu obj sang các kiểu primitive:
    1. Tất cả các kiểu boolean đều true
    2. Kiểu chuyển sang số xảy ra khi chúng ta trừ 2 obj: date1 - date2
    3. Kiểu chuyển sang xâu: alert(obj);
*/

/* 
    ToPrimitive:
    - Chúng ta có thể điều chỉnh được việc chuyển đổi này thông việc sử dụng các methods đặc biệt
    - có 3 dạng chuyển đổi chính:
        1. "string" (alert)
        2. "number" (math)
        3. "default" (+, ==)
    - Để thực hiện việc chuyển đổi JS sẽ tìm và gọi 3 thuộc tính của obj:
        1. obj[Symbol.toPrimitive]
        2. obj.toString(), obj.valueOf()
        3. obj.valueOf, obj.toString()

*/

/* 
    Symbol.toPrimitive
    obj[Symbol.toPrimitive] = function(hint) {
  // must return a primitive value
  // hint = one of "string", "number", "default"
};
*/

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

/* 
    toString/valueOf
    

*/