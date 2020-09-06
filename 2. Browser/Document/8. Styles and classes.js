/* 
    Styles and classes
    - Có 2 cách đẻ style một element:
        1. Tạo một class trong CSS và thêm nó <div class="...">
        2. Viết một thuộc tính vào trong style: <div style="...">
    -> JS có thể thay đổi cả classes và style properties
    - Chúng ta nên sử dụng CSS classes. Những cách sau đây chỉ được sử dụng khi class không sử lý được
*/

/* 
    Xử lý với class:
        elem.className - trả về một string các class
        elem.classList - trả về một obj với những methods:
            add(string) - thêm một class
            
            remove(class) - xoá một class;
            
            toggle("class"); - thêm nếu class không tồn tại, xoá nếu class tồn tại

            contains("class") - kiểm tra xem class có tồn tại
        - classList là một iterable
*/

/* 
    + Element Style:
        elem.style
    + Reset the style property
        elem.style.display = "none"
    + Set full rewrite css:
        elem.stylle.cssText = 'color:red';
    + Đừng quên đơn vị của css
    + Đọc style css:
        window.getComputedStyle(element, [pseudo]).getPropertyValue("css");
        - element - phần tử muốn đọc
        - pseudo - 
        
*/
let computedStyle = getComputedStyle(document.body);

// now we can read the margin and the color from it

alert( computedStyle.marginTop ); // 5px
alert( computedStyle.color ); // rgb(255, 0, 0)