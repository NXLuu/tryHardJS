/* 
    DOM modification là chìa khoá đẻ tạo ra live page;
*/

/* 
    + Tạo một element
        - document.createElement(tag)
         - document.createTextNode(text)
    + Thêm elem methods:
        - node.append(...nodes or strings): thêm nodes vào cuối của node
        - node.prepend(...nodes or strings):
        thêm nodes vào đầu của node
        - node.before(...nodes or strings): trèn  nodes vào trước trước node
        - node.after(...nodes or strings): trền node vào sau  node
        - node.replaceWith(...nodes or strings): Thay thế  node

    + Thêm elem methods kiểu khác:
        elem.insertAdjacentHTML/Text/Element(where, html)

        - "beforebegin" - html trước elem
        - "afterbegin"  - html vào đầu elem
        - "beforeend"   - html vào cuối elem
        - "afterend"    - html sau elem
    + Xoá
        node.remove();
    + CLone
        - elem.cloneNode(true): clone tất cả mọi thứ
        - elem.cloneNode(false): clone mà không có children
    + document.write(html): Viết html vào page ngay lâp tưc

*/
