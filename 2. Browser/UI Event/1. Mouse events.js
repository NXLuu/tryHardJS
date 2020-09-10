/* 
    - Các loại mouse event:
        1. mousedown/mouseup: Khi click/thả ra khỏi một elem
        2. mouseover/mouseout: Khi con trỏ chuột đến và rời khỏi elem
        3. mousemove: Mỗi khi con trỏ chuột di chuyển
        4. click: Thực hiện đồng thời mousedown và mouseup 
        5. dbclick: Hai lần click trong mọt khoảng thồi gian ngắn
        6. contextmenu: Click chuột phải hoặc sử dựng phường pháp đặc biệt đẻ mở contextMenu
    
    +  event order:
        + Một người dùng có thể sử dụng nhiều event
            Ví dụ: mousedown -> mouseup -> click
    + Mouse button:
        event.button

        Những sự kiện click thì luôn luôn có thuộc tính button - cho phêp biết chính sác nut chuột nào dược sử dụng
        - {
            chuột trái: 0
            chuột giữa: 1
            chuột phải: 2
            x1 button(back): 3
            x2 butotn(forward): 4
        }
    
    + Modifiers: shift, alt, ctrl, meta
        + tất cả các sự kiện đều chứa thông tin về modifer- Những nấn kết hợp với click:
         1. shiftKey: shift
         2. allKey: Alt (Opt với MAC)
         3. ctrlKey: Ctrl 
        + Nếu chúng là true thì trước khi click là đã ấn nó
    
    + Coordinates: clientX/Y, pageX/Y
        + Tất cả chuột event đều cung cấp 2 toạ độ:
            1. Window-relative: clientX, clientY
            2. pageX, pageY
*/