class Calculator {
    constructor() {
      this.display = document.querySelector("#display");
      this.keyboard = document.querySelector("#keyboard");
      this.clearButton = document.querySelector("#clear");
      this.backspaceButton = document.querySelector("#backspace");
      this.decimalButton = document.querySelector("#decimal");
      this.divideButton = document.querySelector("#divide");
      this.multiplicationButton = document.querySelector("#multiplication");
      this.minusButton = document.querySelector("#minus");
      this.plusButton = document.querySelector("#plus");
      this.equalButton = document.querySelector("#equal");
    }
  
    init() {
      this.keyboard.addEventListener("click", (event) => {
        if (event.target.classList.contains("number")) {
          this.display.innerHTML += event.target.innerHTML;
        } else if (event.target.classList.contains("operator")) {
          switch (event.target.id) {
            case "clear":
              this.display.innerHTML = "";
              break;
            case "backspace":
              this.display.innerHTML = this.display.innerHTML.slice(0, -1);
              break;
            case "decimal":
              if (!this.display.innerHTML.includes(".")) {
                this.display.innerHTML += ".";
              }
              break;
            case "divide":
              this.display.innerHTML += " / ";
              break;
            case "multiplication":
              this.display.innerHTML += " * ";
              break;
            case "minus":
              this.display.innerHTML += " - ";
              break;
            case "plus":
              this.display.innerHTML += " + ";
              break;
            case "equal":
              this.display.innerHTML = eval(this.display.innerHTML);
              break;
          }
        }
      });
    }
  }
  
  const calculator = new Calculator();
  calculator.init();
  






