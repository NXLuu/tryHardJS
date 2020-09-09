/* 
    Bubbling:
    - Quy luật nổi bong bóng:
    - Khi một sự kiện xảy ra ở một elem. Đầu tiên nó sẽ chạy ở chính elem đó. Sau đó đến bố mẹ của nó. Rồi đến tất cả tổ tiên của nó
    - Hầu hết tất cả căc event bubble chỉ trừ focus

    + Dừng bubble:
        - event.stopPropagation(); - thêm câu lệnh trong handler
        - event.stopImmediatePropagation(); - Dừng tất cả các sự kiện
    + Đừng dừng bubbling không cần thiết:

/* 
    Event.targer:
    - elem chính xác nơi mà sự kiện xảy ra

*/

/* 
    Capturing:
    - DOM Evnets chuẩn được miêu tả bởi 3 sự lan truyền sự kiện:
        1. Capturing phase: events đi xuống elem
        2. Target phase: evnets đạt đến được target elem
        3. Bubbling phase: events nổi lên các elem khác
    elem.addEventListener(..., {capture: true})
*/