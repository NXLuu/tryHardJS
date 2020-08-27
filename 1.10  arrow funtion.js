/* 
    Hàm mũi tên: câu trúc viết đơn giản vè xúc tích cho việc tạo hàm. Thường tốt hơn so với function exprressions
*/
    let func = (arg1, arg2,...argN) ==> expression
    let sum = (a, b) => a + b;
    let double = n => n * 2;
    let sayHi = () => alert("Hello!");

    let sum = (a, b) => {  // the curly brace opens a multiline function
        let result = a + b;
        return result; // if we use curly braces, then we need an explicit "return"
    };
