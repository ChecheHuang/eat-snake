class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("food")!;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

//測試代碼
// const food = new Food();
// console.log(food.X,food.Y)
// food.change()
// console.log(food.X,food.Y)

export default Food;
