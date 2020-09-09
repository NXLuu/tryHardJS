/* 
    Event delegation
    - Capturing và bubbling cho phép chúng ta triển khai một trong số các cách xử lý nhiều event mạnh mẽ nhất
    - Nếu chúng ta có nhiều elem được xử lý theo cùng một cách. Thì thay vì gán cho từng phần tử, chúng ta có thể gán chỉ duy nhất một handler cho tổ tiên của nó 
    - Trong handler chúng ta có thể lấy event.target đẻ xem nới mà xự kiện thực sự xảy ra

*/

let selectedTd;

table.onclick = function(event) {
  let target = event.target; // where was the click?

  if (target.tagName != 'TD') return; // not on TD? Then we're not interested

  highlight(target); // highlight it
};

function highlight(td) {
  if (selectedTd) { // remove the existing highlight if any
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // highlight the new td
}