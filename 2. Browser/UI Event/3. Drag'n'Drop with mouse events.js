/* 
    Kéo thả là một gải pháp thiết kế gia diện 
    + Thuật toán kéo thả:
        - Trong mousedown: chuẩn bị cho elem di chuyển
        - Sau đó đến mousemove: Thay đổi leff/top với position:absolute
        - Trong mouseup: Kết thức kéo thả
*/

ball.ondragstart = function() {
  return false;
};
ball.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(ball);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };
};

/* 
  Droppables:
    Làm sao để lấy được phần tử cần thả vào trong khi đang giữa phần tử khác đè lên 
    
    ball.hidden = true; // (*) hide the element that we drag

    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    // elemBelow is the element below the ball, may be droppable

    ball.hidden = false;
*/
