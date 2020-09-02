/* 
    >, <, >=, <=, ==, !=
    -> Kết quả trả về là kiểu boolean (true/false)
*/

/* 
    So sánh 2 xâu 
    - So sánh theo thứ tự từ điển, xâu dài hơn sẽ lớn hơn 
    'Z' > 'A'
*/
    alert( 'Z' > 'A' ); // true
    alert( 'Glow' > 'Glee' ); // true
    alert( 'Bee' > 'Be' ); // true

/* 
    So sánh giữa hai loại khác nhau
    - Khi hai giá trị so sánh khác nhau thì JS sẽ chuyển thành number
*/
    alert( '2' > 1 ); // true, string '2' becomes a number 2
    alert( '01' == 1 ); // true, string '01' becomes a number 1
/* 
    So sánh bằng một cách chặt chẽ
    - So sánh == thông thường nó không thể phân biệt được số 0 và false
    - So sánh nghiêm ngặt === nếu a và b khác loại thì sẽ return false
    - Cũng có != và !==
*/

/* 
    So sánh giữ null và undefined
    null == undefined (true)
    null === undefined (false)
    < > <= >= null sẽ chuyển thành 0 và undefined sẽ chuyển thành NaN
    - So sánh null với số 0
        null > 0 (false)
        null == 0 (false)
        null >= 0 (true)
        Bởi vì cách hoạt động của (==) với cái khác khác nhau
        
*/