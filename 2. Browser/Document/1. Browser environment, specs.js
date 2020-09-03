/* 
    JS ban đầu được tạo ra cho web browsers
    Sau đó nó phát triển và trả thành một ngôn ngữ với nhiều platforms
    Platform có thể là browser, web-server và một host khác
    Mỗi host environment cung cấp obj và func của riêng nó.
    - Đây là js chạy trên web browser:
                    window
        DOM         BOM             JS
        document    navigator       Object
                    screen          Array
                    location        Function
                    frames
                    history
                    XMLhttpRequest
    + window là một global obj, nó đại diện cho browser window và cung cấp methods đẻ quản lý
*/

/* 
    DOM(Document Object Model)
        - đại diện cho tất cả các page content như là objects và có thể thay đổi được
        - document obj là điểm chính của page, chúng ta có thể tạo và thay đỏi mọi thế trên page sử dụng nó
*/

/* 
    BOM(Browser Object Model)
    - Đại diện cho tất cả objects bổ sung bởi browser cho phép hoạt động với mọi thứ trừ document
*/
alert(location.href); // shows current URL
if (confirm("Go to Wikipedia?")) {
  location.href = "https://wikipedia.org"; // redirect the browser to another URL
}