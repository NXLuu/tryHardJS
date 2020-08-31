/* 
    Config Object
    Property flasgs: 
    Objects có 3 attributes gọi là flags:
    - writable: true - giá trị có thể thay đổi
    - enumerable: true - có vòng lặp
    - configurable: true - Thuộc tính có thể bị xoá và các attributes có thể thay đổi
    Để thay đổi flags chúng ta sử dụng :Object.defineProperty
*/
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

Object.defineProperty(obj, propertyName, descriptor)

//---------------
let user = {
  name: "John"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/


/* 
    Property getters and setters:
    Có 2 loại thuộc tính:
    - data properties
    - accessor properties: Chúng là các hàm thược hiện viên get và set 1 giá trị
*/

// Getter và setter: 
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper

/* 
    Accessor description:
    get - một hàm không có arguments
    set - một hàm với 1 argument
    enumerable
    configurable
*/

/*
    smarter getters/setters
    _ là sử dụng bên trong và không nên bị tác động bởi bên ngoài
*/
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name is too short...


function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday is available
alert( john.age );      // ...as well as the age