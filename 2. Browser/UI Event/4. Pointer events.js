/* 
    Pointer events
    - Pointer events là một cách hiện đại đê xử lý xự kiện của nhiều loại thiết bị như chuột, pen hay touchscreen và ...
    + Pointer event types:
        1. pointerdown 
        2. pointerup
        3. pointermove
        4. pointerover 
        5. pointerout
        6. pointerenter
        7. pointerleave
        8. pointercancel
        9. gotpointercapture
        10. lostpointercapture

    + pointer event porperties:
        1. pointerId - Định dạng độc nhất của pointer gây ra bởi sự kiện
        2. pointerType - Loại thiết bị : "mouse", "pen", "touch"
        3. isPrimary  - true: Nếu là con trỏ chính(con trỏ đầu tiên, nếu có nhiều con trỏ)
        4. width - chiều rộng của area nơi mà con trỏ chạm vào thiết bị
        5. height - Chiều cao ...
        6. pressure - áp lục ấn 0 -> 1
        7. tangentialPressure - Tiếp tuyến của áp lực
        8. tiltX, tiltY, tưist - 

    + Multi-touch:
        - Đa điểm chạm:
        - Lần đầu tiên:
            pointerdown và isPrimary=true và một vài pointerId
        - Những lần tiếp theo
            pointerdown và isPrimary = false; và mỗi pointerId cho mỗi ngón tay
    + Event: pointercancel
        - Xảy ra khi có một tương tác pointer đang diễn ra mà bất chợt bị huỷ bởi thứ gì đó
            1. Phần cứng thiết bị vô hiệu hoá con trỏ
            2. Xoay thiết bị 
            3. Browser quyết định tự xự lý
        touch-action: none

    + pointer capturing
        - Một tính năng đặc biệt của pointer events
        - Ý tưởng là chúng ta gắn tất cả các sự kiện với một pointerId cho một elem
        - Khi đó tất cả các sự kiện tiếp theo sẽ có cùng pointerId
        
        - elem.setPointerCapture(pointerId) - Nối pointerId với elem
        - elem.releasePointerCapture(pointerId) - thả pointerId khỏi elem

        - Sự ràng buộc thì không lâu. Nó sẽ bị removed sau khi pointerup và pointercancel events hoặc khi elem bị removed khỏi document
    */