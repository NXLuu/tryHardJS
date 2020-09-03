/* 
                  EventTarget
                       |
                       |
                     Node
                       |
        Text        Element   Comment
                       |
                    HTMLElement
HTMLInputElement  HTMLBodyElement   HTMLAnch

    - EventTarget - Là một class gốc trừu tượng. Obj của class này thì không bao giờ được tạo - là cơ sở của DOM nodes
    - Node  - Là cơ sở của DOM
    - Elements - Là cơ sở của DOM elements
*/


/* 
    - elem.nodeType - loại node của elem
        1 - là elements node
        3 - là text node
        9 - là document obj
    - nodeName, tagName - 
        1. tagName chỉ tồn tại cho elemets node
        2. nodename tồn tại cho bất kì node nào
    - elem.innerHTML - lấy HTML bên trongg elements -> trả về string
    - elem.outer - Nó giống như innerHTML nhưng bao gồm HTML của chính elem
    - elem.nodeValue/data - trả về text node
    - elem.textContent - trả về text bên trong element kể  cả xuống dòng
    - elem.hidden - ẩn elem
*/
