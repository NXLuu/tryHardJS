/*
    document.documentElement - HTML
    + Để lấy chiều cao, chiều rộng của window
        - document.documentElement.clientWidth 
        - document.documentElement.clientHeight

    Lấy chiều cao của toàn bộ document kẻ cả scrolled
    let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
    );

    document.documentElement.scrollLeft/Top
    window.pageYOffset/pageXOffset

    + Scrolling:
        - window.scrollTo(pageX,pageY): - scroll từ vị trí hiện tại pageX và pageY
        - window.scrollBy(x,y) - Cuộn trang tới chính xác x, y
        - elem.scrollIntoView(top): Cuộn trang cho tới khi elem đcợc nhìn thấy
            1. top=true: elem ở bên  trên
            2. top=fale: elem sẽ ở bên dưới

    + Cấm không cho cuộn:
        - document.body.style.overflow = "hidden"
        - document.body.style.overflow = "":
        tiếp tục cuộn
*/