class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement, operationButtons) {
    //construction parameters
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.operationButtons = operationButtons
    this.clear()
  }
  //on button message to screen
  welcome() {
    this.currentOperandTextElement.innerText = "Welcome";
  }
  //of button message to screen
  close() {
    this.currentOperandTextElement.innerText = "Mihail Tal was here";
  }
  //to clear all operational parameters AC button
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }
//to delete last input C button
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
  //append number from input to previous input
  appendNumber(number) {
    return this.currentOperand = this.currentOperand.toString() + number.toString()
  }
//set the operation according to the compute function
  chooseOperation(operation) {
    this.compute()
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }
  // factorial function
  factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i
      console.log(result)
    } return result
  }
//math calculation operations
  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    let text = this.previousOperandTextElement.innerText
    text = text.split(" ")
    switch (this.operation) {

      case '+':
        computation = (prev + current).toFixed(2)
        break
      case '-':
        computation = (prev - current).toFixed(2)
        break
      case '*':
        computation = (prev * current).toFixed(2)
        break
      case '÷':
        computation = (prev / current).toFixed(2)
        break
      case "%":
        computation = ((prev / current) * 100).toFixed(2)
        break
      case "X!":
        if (text[0] == "X!") {
          this.currentOperandTextElement.innerText = ""
          this.previousOperandTextElement.innerText = "Error"
          break
        } else {
          computation = this.factorial(prev)
          break
        }
      case "ln":
        if (text[0] != "ln") {
          this.currentOperandTextElement.innerText = ""
          this.previousOperandTextElement.innerText = "Error"
          break
        } else {
          computation = Math.log(current).toFixed(2)
          break
        }
      case "log":
        if (text[0] != "log") {
          this.currentOperandTextElement.innerText = ""
          this.previousOperandTextElement.innerText = "Error"
          break
        }
        else {
          computation = Math.log10(current).toFixed(2)
          break
        }
      case "√":
        if (text[0] != "√") {
          this.currentOperandTextElement.innerText = ""
          this.previousOperandTextElement.innerText = "Error"
          break
        }
        else {
          computation = Math.sqrt(current).toFixed(2)
          break
        }
      case "xʸ":
        computation = (prev ** current).toFixed(2)
        break
      case "EXP":
        if (text[0] != "EXP") {
          this.currentOperandTextElement.innerText = ""
          this.previousOperandTextElement.innerText = "Error"
          break
        } else {
          computation = (Math.E ** current).toFixed(2)
          break
        }
      case "RND":
        if (text[0] == "RND") {
          this.currentOperandTextElement.innerText = ""
          this.previousOperandTextElement.innerText = "Error"
          break
        } else {
          computation = Math.round(prev)
          break
        }
      case "sin":
        if (text[0] != "sin") {
          this.currentOperandTextElement.innerText = ""
          this.previousOperandTextElement.innerText = "Error"
          break
        } else {
          computation = Math.sin(current).toFixed(2)
          break
        }
      case "tan":
        if (text[0] != "tan") {
          this.currentOperandTextElement.innerText = ""
          this.previousOperandTextElement.innerText = "Error"
          break
        } else {
          computation = Math.tan(current).toFixed(2)
          break
        }
      case "cos":
        if (text[0] != "cos") {
          this.currentOperandTextElement.innerText = ""
          this.previousOperandTextElement.innerText = "Error"
          break
        } else {
          computation = Math.cos(current).toFixed(2)
          break
        }
      default:
        return
    }
    const result = () => {
      if( this.previousOperandTextElement.innerText == "Error"){
        console.log("Error message sent")
        this.clear()
      }else{
        console.log(computation)
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
      }  
    }  
  result()

  }
//display the number with decimal to do this, separate number from decimal and integer parts
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }
//show the the result coming from getdisplaynumber function
  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
  //open screen light
  openlight() {
    document.getElementById("screen").style.backgroundColor = "cornsilk";
//close screen light
  }
  closelight() {
    document.getElementById("screen").style.background = "black";

  }
}

// variables of all button on the calculator
const onoffButton = document.querySelector('.off')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('.equal')
const deleteButton = document.querySelector('.c')
const allClearButton = document.querySelector('.ac')
const previousOperandTextElement = document.querySelector('.previous-operand')
const currentOperandTextElement = document.querySelector('.current-operand')
const e = document.querySelector(".e")
const pi = document.querySelector(".pi")

//assign the class calculator to calculator with 3 parameters
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement, operationButtons);


//on off button
onoffButton.addEventListener('click', () => {
  if (document.getElementById("screen").style.backgroundColor == "cornsilk") {
    calculator.clear();
    calculator.updateDisplay();
    calculator.close();
    setTimeout(calculator.closelight, 1000);
  } else {
    calculator.clear();
    calculator.updateDisplay();
    calculator.openlight();
    calculator.welcome();
  }
})

//number buttons including pi and e
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText == "e") {
      calculator.appendNumber(2.72)
      calculator.updateDisplay()
    }
    else if (button.innerText == "π") {
      calculator.appendNumber(3.14)
      calculator.updateDisplay()
    } else {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    }
  })

})
//operation buttons
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay();
  })
})
//equal button if result is not error, it shows the result
equalsButton.addEventListener('click', button => {
  calculator.compute();
  if (previousOperandTextElement.innerText !== "Error") {
    calculator.updateDisplay();
  }
})
//ac button
allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay();
})
//c button
deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay();
})
//event handler
document.addEventListener('keydown', function (event) {
  let patternForNumbers = /[0-9]/g;
  let patternForOperators = /[+\-*\/]/g
  if (event.key.match(patternForNumbers)) {
    event.preventDefault();
    calculator.appendNumber(event.key)
    calculator.updateDisplay()
  }
  if (event.key === '.') {
    event.preventDefault();
    calculator.appendNumber(event.key)
    calculator.updateDisplay()
  }
  if (event.key.match(patternForOperators)) {
    event.preventDefault();
    calculator.chooseOperation(event.key)
    calculator.updateDisplay()
  }
  if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    calculator.compute()
    calculator.updateDisplay()
  }
  if (event.key === "Backspace") {
    event.preventDefault();
    calculator.delete()
    calculator.updateDisplay()
  }
  if (event.key == 'Delete') {
    event.preventDefault();
    calculator.clear()
    calculator.updateDisplay()
  }

});