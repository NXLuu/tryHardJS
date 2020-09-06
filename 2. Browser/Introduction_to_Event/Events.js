/* 
    Event là một tín hiệu cho thấy có thứ đó đang xảy ra. Tất cả các DOM nodes đều có thể tạo ra tín hiệu đó
    List các Event:

    1. Mouse events:
        - click
        - contextmenu: click chuột phải
        - mouseove/mouseout: Khi con trỏ chuột đến và rời khỏi một elem
        - mousedown/mouseup: Khi con chuột được ấn và thả ra
        - mousemove: Chuột di chuyển
    2. Keyboard events:
        - keydown - bàn phím được ấn
        - keyup - bàn phím được thả ra
    3. Form element events:
        - submit - Khi một người submit 1 form
        - focus - Khi focus vào 1 elem
    4. Document events:
        - DOMContentLoaded: khi html load xong. DOM được built xong hoàn toàn
    5. CSS events:
        - transitionend - Khi kết thúc 1 CSS-animationo
*/

/* 
    Events handlers:
    - Để phản ừng với một events chúng ta có thể gán cho handler một func cái mà chạy trong trường hợp xảy ra events
    - Các cách gán handler:
        1. HTML-attribute
            on<event> = "";
            onclick="countRabbits()"
            onclick="alert('Click!')"
        2. DOM property
            elem.onclick = function() {...}
        3. addEventListener: gán nhiều handler events cho 1 elem
            - element.addEventListener(event, handler, [options]);
                + event: tên event
                + handler: hàm xử lý
                + options: obj
                    1.once: nếu true listener sẽ tự động removed sau khi nó được kích hoạt
                    2.capture: 
                    3. passive: nếu true handler sẽ không gọi preventDefault();
        4. element.removeEventListener(event, handler, [options]);


    - Xoá một handler:
        elem.onclick = null;
    - this trong Handler:
        Giá trị của this chính là elem chứa handler
*/
<input value="Click me" onclick="alert('Click!')" type="button">
</input>

/* 
    Event Object:
        - event.type - loại event
        - event.currentTarget - elem có handler
        - event.clientX/clientY
        - .................
*/

/* 
    OBJ handlers: handleEvent
    - Chúng ta không chỉ có thể gán một hàm, mà còn có thể gán một obj cho event handlers sử dụng addEventListener
    - Khi một event xảy ra, method handleEvent sẽ được gọi
*/
<button id="elem">Click me</button>

<script>
  class Menu {
    handleEvent(event) {
      // mousedown -> onMousedown
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }

    onMousedown() {
      elem.innerHTML = "Mouse button pressed";
    }

    onMouseup() {
      elem.innerHTML += "...and released.";
    }
  }

  let menu = new Menu();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);
