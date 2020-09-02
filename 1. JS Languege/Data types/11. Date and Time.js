/* 
    built-in object: Date
    Bắt đầu date là 01-01-1970
*/

/* Tạo 
*/

let now = new Date();
alert( now ); // shows current date/time
// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );
// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );
// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );

// new Date(datestring)
let date = new Date("2017-01-26");
alert(date);

//new Date(year, month, date, hours, minutes, seconds, ms)
/* 
    year: phải có 4 số
    month: 0(Jan) - 11(Dec)
    date: Nếu thiếu thì 1 là mặc định
    hours/minutes/seconds/ms: Nếu vắng thì bằng 0

*/

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

/* 
    Access date componets
    getFullYear() - trả về năm (4 con số)
    getMonth() - trả về tháng (0-11)
    getDate() - trả về ngày từ (1-31)
    getHours(), getMinutes(), getSeconds(), getMilliseconds()
    getDay() - từ (0(Sunday) -> 6(Saturday) )
    getTime() - trả về dấu mốc thời gian
    getTimezoneOffset() - Trả về sự khác biệt giữa UTC và local time zone
*/

/* 
    Setting date components
    setFullYear(year, [month], [date])
    setMonth(month, [date])
    setDate(date)
    setHours(hour, [min], [sec], [ms])
    setMinutes(min, [sec], [ms])
    setSeconds(sec, [ms])
    setMilliseconds(ms)
    setTime(milliseconds)
*/

let today = new Date();

today.setHours(0);
alert(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.

/* 
    Autocorrection
    Nếu ngày hoặc bất cứ thứ gì quá vô lý nó sẽ tự chỉnh lại
*/
