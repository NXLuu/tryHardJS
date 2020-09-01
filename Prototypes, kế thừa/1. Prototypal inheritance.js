/* 
    Prototype: là một property ẩn đặc biệt có giá trị hoặc là null, hoặc là tham chiếu đến một obj khác - obj đó được gọi là prototype obj
    - Khi chúng ta muốn đọc một thuộc tính từ obj, và thiếu nó thì JS sẽ tự động lấy nó từ prototype - thừa kế từ nguyên mẫu
    - Truy cập prototype qua __proto__
    - Giới hạn của protoype:
        1. Tham chiếu không thể vòng trong
        2. __proto__ chỉ có thể null hoặc 1 obj, các data type khác đều ko được
        3. Mỗi obj chỉ có duy nhất 1 prototype
    - Nếu chúng ta gọi obj.method, method được lấy từ prototype thì this vẫn là của obj
    - for...in sẽ lặp qua tất cả properties của nó xong mới đến prototype
*/
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;



let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}