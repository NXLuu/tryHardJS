/* 
    Rất nhiều sự kiện tự động xảy ra, vì các hành động trên browser:
        - Một click vào đường link
        - Một click vào form submit 
        - Selects text

    + cách chặn các hanhd động này:
        - event.preventDefault();
        - Trong on<event> return false;
    + passive trong handler option:
        passive: true; - Sẽ không bao giờ gọi đến preventDefault()
    
    + event.defaultPrevented
        - Thuộc tính này là true nếu các action mạc định bị chặn và false nếu ngược lại
        - 
    
*/
<a href="/" onclick="return false">Click here</a>
or
<a href="/" onclick="event.preventDefault()">here</a>

<p>Right-click for the document menu (added a check for event.defaultPrevented)</p>
<button id="elem">Right-click for the button menu</button>

  elem.oncontextmenu = function(event) {
    event.preventDefault();
    alert("Button context menu");
  };

  document.oncontextmenu = function(event) {
    if (event.defaultPrevented) return;

    event.preventDefault();
    alert("Document context menu");
  };
