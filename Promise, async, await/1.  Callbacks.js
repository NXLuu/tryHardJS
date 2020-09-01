/* 
    Khi một hàm được truyền vào như tham số của một hàm thì nó được gọi là callbacks
*/
// Ví dụ:--------------
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

// Track error
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

/* 
    Callbacks hell
    Nhiều hành động không đồng bộ thêo sau nhau thì sẽ gây ra hiện tương callbacks hell, Pyramid of Doom

*/