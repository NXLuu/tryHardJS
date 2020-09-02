/* 
    Chúng ta có thể gán một method cho chính class function của nó mà không phải là prototype. Những method đó gọi là static
    - Static methods dùng để triển khai hàm cái mà thuộc về class mà không thuộc về bất kì obj nào
    - Static properties: cũng giống như methods
    - static methods và static properties được kế thừa
*/

class User {
    static staticMethod() {
        alert(this == user);
    }
}
User.staticMethod(); // true;

//-----------------------
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}
// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

alert( articles[0].title ); // CSS

//--------
class Article {
  static publisher = "Ilya Kantor";
}
alert( Article.publisher ); // Ilya Kantor

