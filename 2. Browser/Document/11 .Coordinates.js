/* 
    Để di chuyển các elem chúng ta quen với yếu tố Coordinates - tạo độ
    - Có 2 hệ thông toạ độ:
        1. Relative to window - position:fixed
        2. Relative to the document - position:absolute
*/
     
/* 
    Element coordinates
    - elem.getBoundingClientRect(): trả về một tạo độ window có các thuộc tính:
        x/y - toạ độ x và y của đầu hình cn
        width/height  - chiều cao và rộng cn
        top/bottom  -
        left/right
    - Thuộc tính có thể âm

*/

/* 
    elementFromPoint(x,y);
    -> trả về phần tử tại vị trí x, y

*/

/* 
    Document coordinates
    pageY = clientY + chiều  cao phần đã scrolled
    pageX = clientX + chiều rộng

*/

let elem = document.getElementById("coords-show-mark");

function createMessageUnder(elem, html) {
  // create message element
  let message = document.createElement('div');
  // better to use a css class for the style here
  message.style.cssText = "position:fixed; color: red";

  // assign coordinates, don't forget "px"!
  let coords = elem.getBoundingClientRect();

  message.style.left = coords.left + "px";
  message.style.top = coords.bottom + "px";

  message.innerHTML = html;

  return message;
}

// Usage:
// add it for 5 seconds in the document
let message = createMessageUnder(elem, 'Hello, world!');
document.body.append(message);
setTimeout(() => message.remove(), 5000);

// Absolute
// get document coordinates of the element
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}
function createMessageUnder(elem, html) {
  let message = document.createElement('div');
  message.style.cssText = "position:absolute; color: red";

  let coords = getCoords(elem);

  message.style.left = coords.left + "px";
  message.style.top = coords.bottom + "px";

  message.innerHTML = html;

  return message;
}