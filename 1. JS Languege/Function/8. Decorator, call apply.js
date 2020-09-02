/* 
    decarator: là một hàm đặc biệt, nhận vào một hàm và thay đổi nó.
    Ví dụ: mọt hàm chạy rất chậm và nó thường xuyên trả và một giá trị với một tham số dầu vào. Thì ta có thể dùng decorator để bắt giá trị đó trước khi hàm chạy

*/
function slow(x) {
  // there can be a heavy CPU-intensive job here
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // if there's such key in cache
      return cache.get(x); // read the result from it
    }
    let result = func(x);  // otherwise call func
    cache.set(x, result);  // and cache (remember) the result
    return result;
  };
}
slow = cachingDecorator(slow);
alert( slow(1) ); // slow(1) is cached
alert( "Again: " + slow(1) ); // the same
alert( slow(2) ); // slow(2) is cached
alert( "Again: " + slow(2) ); // the same as the previous line

/* 
    func.call: decorator thì không hoạt động với obj method. Bởi vì nó sẽ không phải là this của method.
    -> Chính vì thế mà func.call ra đời cho phép một hàm có thể set this một cách rõ ràng
    func.call(context, arg1, arg2, ...)
    Nó sẽ chạy hàm với this của context
*/

// Lỗi
// we'll make worker.slow caching
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // scary CPU-heavy task here
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};
// same code as before
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x); // (**)
    cache.set(x, result);
    return result;
  };
}
alert( worker.slow(1) ); // the original method works
worker.slow = cachingDecorator(worker.slow); // now make it caching
alert( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod' of undefined

// Fix
let worker = {
  someMethod() {
    return 1;
  },
  slow(x) {
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // "this" is passed correctly now
    cache.set(x, result);
    return result;
  };
}
worker.slow = cachingDecorator(worker.slow); // now make it caching
alert( worker.slow(2) ); // works
alert( worker.slow(2) ); // works, doesn't call the original (cached)

/* 
    func.apply
    - Thay vì gọi func.call(this, ...arguments), chúng ta có thể sử dụng func.apply(this, arguments)
    func.apply(context, args)

*/

/* 
    Mượn methods: [].join.call(arguments)
*/