/* 
    An operand(toán hạng) / Arguments
    operators(toán tử)
    5 * 2 - (5, 2 là toán hạng, * / + - là toán tử)
*/

/* 
    2. MATH
    addition +
    subtract -
    multiplication *
    division /
    remainder %
    exponentiation **

    2.1 remiander %
    - phép chia dư
    2.2 
    - phép mũ: 2 ** 2 (2^2)= 4
               2 ** 4 (2^4)= 16
               4 ** (1/2) (4^1/2) = 2
*/

/* 
    3. Ghép nối xâu với toán tử +
*/
    let s = "my" + "string";
    alert(s); // mystring

    alert( '1' + 2 ); // "12"
    alert( 2 + '1' ); // "21"

    alert(2 + 2 + '1' ); // "41" and not "221"

    alert( 6 - '2' ); // 4, converts '2' to a number
    alert( '6' / '2' ); // 3, converts both operands to numbers

/*
    4. Toán tử cộng một ngôi
        - Có thể thêm dấu cộng trước một xâu để biến xâu đó thành số
*/
    let apples = "2";
    let oranges = "3";

    // both values converted to numbers before the binary plus
    alert( +apples + +oranges ); // l
