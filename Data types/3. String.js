str.length
str[0]; 
str.charAt(0);
for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false
alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"
alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"
let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0
let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

/* 
    Đính dạng của String luôn là UTF-16
    
*/
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

/* 
    Các ký tự đặc biệt
    \n: Dòng mới
    \r\n: Ngắt dòng
    \", \': Dấu nháy
    \\: dấu \
    \t: tab
    \b, \f, \v:  Backspace, Form Feed, Vertical Tab
    \xXX: Viết mã unicode  
    \uXXXX:  Code in UTF-16
*/
alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫, a rare Chinese hieroglyph (long unicode)
alert( "\u{1F60D}" ); // 😍, a smiling face symbol (another long unicode)

/* 
    Các ký tự trong string là không thể thay đổi 
*/
let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work



