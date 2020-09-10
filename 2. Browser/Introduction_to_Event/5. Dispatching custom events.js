/* 
    Chúng ta cung có thể tạo ra các event từ JS
    - Custom events có thẻ sử dung graphical componenets
    - Ví dụ như một menu có thể có các sự kiện open, select
*/

/*
    Event constructor:
        let event = new Event(type[, option]);
        - type: là loại event, một string như là "click", hoặc "my-event"
        - options: một obj với 2 properties
            1. bubbles: true/false
            2. cacelabale: true/fasle - nếu true khi đó default action có thể prevent
    
    dispatchEvent:
        - khi một obj event được tạo, chúng ta nên chạy nó trong elem sử dụng elem.dispatchEvent(event);
        - 
*/

<h1 id="elem">Hello from the script!</h1>


  // catch on document...
  document.addEventListener("hello", function(event) { // (1)
    alert("Hello from " + event.target.tagName); // Hello from H1
  });

  // ...dispatch on elem!
  let event = new Event("hello", {bubbles: true}); // (2)
  elem.dispatchEvent(event);

  // the handler on document will activate and display the message.
