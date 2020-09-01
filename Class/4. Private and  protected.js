/* 
    Trong lập trình hướng đối tượng thì properties và methods được chia thành 2 loại:
    - Internal inteface - methods và properties của class chỉ được truy cập từ methods của class mà không được truy cập từ bên ngoài
    - External interface - methods và properties có thể được truy cập từ bên ngoài

    - protected properties được sử dụng với dấu _ đằng trước
    - private có dấu # đằng trước
*/
// Protected----------------------
class CoffeeMachine {
  _waterAmount = 0;
  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }
  get waterAmount() {
    return this._waterAmount;
  }
  constructor(power) {
    this._power = power;
  }
}
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
// add water
coffeeMachine.waterAmount = -10; // Error: Negative water

//private----------
class CoffeeMachine {
  #waterLimit = 200;
  #checkWater(value) {
    if (value < 0) throw new Error("Negative water");
    if (value > this.#waterLimit) throw new Error("Too much water");
  }

}
let coffeeMachine = new CoffeeMachine();
// can't access privates from outside of the class
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error