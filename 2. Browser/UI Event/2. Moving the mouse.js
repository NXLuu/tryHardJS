/* 
    Event mouseover/mouseout, relatedTarget
    - Sự kiện mouseover xảy ra khi con trỏ chuột đến từ một elem khác và mouseout xảy ra khi nó rời đi
    - Do đó nó có thêm thuộc tính relatedTarget: Phần tử mà nó chuyển đến từ target
    - relatedTarget cũng có thể là null
*/

/* 
    Skipping elements:
    - mousemove xảy ra khi chuột di chuyển. Nhưng không có nghĩa là mỗi px đều xảy ra sự kiện này 
    - browsers checks mousemove theo thời gian. Và nếu nó phát hiện ra sự thay đổi, khi đó sự kiện mới được kích hoạt
    - Khi chúng ta di chuột quá nhanh qua các DOM-elem thì chúng có thể bị bỏ qua
*/

/* 
    Mouseout ưhen leaving for a child
    - Một trong những đặc tính quan trọng của mouseout - Nó được kích hoạt khi con trỏ di chuyển từ 1 elem tới các con cháu của nó:
        VD: từ #parent->child
*/

/*
    mouseseenter/mouseleave
    - Nó gần giống mouseover/mouseout
    - Có một vài điểm khác biệt như sau:
        1. Nếu nó đi dênd hoặc rời đi từ con cháu của nó thì sữ không được tính
        2. mouseenter/mouseleave thì không có bubble 
*/

/* 
    Event delegtion:
*/
// <td> under the mouse right now (if any)
let currentElem = null;

table.onmouseover = function(event) {
  // before entering a new element, the mouse always leaves the previous one
  // if currentElem is set, we didn't leave the previous <td>,
  // that's a mouseover inside it, ignore the event
  if (currentElem) return;

  let target = event.target.closest('td');

  // we moved not into a <td> - ignore
  if (!target) return;

  // moved into <td>, but outside of our table (possible in case of nested tables)
  // ignore
  if (!table.contains(target)) return;

  // hooray! we entered a new <td>
  currentElem = target;
  onEnter(currentElem);
};


table.onmouseout = function(event) {
  // if we're outside of any <td> now, then ignore the event
  // that's probably a move inside the table, but out of <td>,
  // e.g. from <tr> to another <tr>
  if (!currentElem) return;

  // we're leaving the element – where to? Maybe to a descendant?
  let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    // go up the parent chain and check – if we're still inside currentElem
    // then that's an internal transition – ignore it
    if (relatedTarget == currentElem) return;

    relatedTarget = relatedTarget.parentNode;
  }

  // we left the <td>. really.
  onLeave(currentElem);
  currentElem = null;
};

// any functions to handle entering/leaving an element
function onEnter(elem) {
  elem.style.background = 'pink';

  // show that in textarea
  text.value += `over -> ${currentElem.tagName}.${currentElem.className}\n`;
  text.scrollTop = 1e6;
}

function onLeave(elem) {
  elem.style.background = '';

  // show that in textarea
  text.value += `out <- ${elem.tagName}.${elem.className}\n`;
  text.scrollTop = 1e6;
}