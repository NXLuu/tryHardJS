/* 
    Tất cả những built-int constructor function đều có thuộc tính prototype của riêng nó
*/

/* 
    Object.prototype
    obj = {} cũng giống như obj = new Object()
    Object() cũng là một constructor function
    -> do đó Object cũng có thuộc tính prototype của riêng nó:  Object.prototype.toString();
    -> obj.__proto__ = Object.prototype
    Cũng có những built-in khác như Array, Function, Number
    - Có thể thêm các property cho prototype cua obj, arr, func khi đó có thể chạy với mội obj, arr, func 
*/