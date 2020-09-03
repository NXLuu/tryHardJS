/* 
    DOM cho phép chúng ta làm mọi thứ với elements và contents. Nhưng đầu tiên chúng ta phải đến được DOM object
    <html> = document.documentElement
    <body> = document.body
    <head> = document.head
    - Trong DOM null ngĩa là không tồn tại
*/

/* 
    childNodes - Một collention lists tất cả các child nodes, bao gồm cả text nodes
    firstChild, lastChild - first and last children
    -> collection là một iterable object giống với mảng
        1. Chúng ta có thể dụng for...of
        2. Array methods không hoạt động, nhưng chúng ta có thể sử dụng Array.from để mượn methods của array

*/

/* 
    Sibling and the parent
    sibling - là các node có cùng parent
    + nextSibling, previousSibling
    + prarentNode
*/

// Những cái bên trên trả về tất cả mọi thứ, kể cả comment, text
/* 
    + children – only those children that are element nodes.
    + firstElementChild, lastElementChild – first and last element children.
    + previousElementSibling, nextElementSibling – neighbor elements.
    + parentElement – parent element.
*/

/* 
    tables:
        table.rows - collections của tr element
        table.caption/tHead/tFoot
        table.tBodies - collections của tbody elements

        thead/tfoor/tbody.row - collections tr của mỗi phần

        tr.cells - collections td và th của tr
        tr.sectionRowIndex - vị trí của tr bên trong thead/tfoot/tbody
        tr.rowIndex - số của tr trong table

        td.cellIndex - số lượng cell bên trong tr

*/