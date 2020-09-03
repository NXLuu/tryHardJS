/* 
    DOM tree
    - Khung xương của HTML documents là các thẻ tags
    - Mọi HTML tag đều là 1 obj.
    - text bên trong tag cũng là 1 obj
    - tag sẽ trở thành elements nodes
    - text sẽ trở thành text nodes
    - Mọi thứ ở HTML đều có chỗ ở DOM, thậm chí là cả các comment
*/
// ví dụ document.body - là obj đại diện cho body tag
document.body.style.background = 'red'; // make the background red

setTimeout(() => document.body.style.background = '', 3000); // return back

/* 
    Ví dụ về DOM


*/