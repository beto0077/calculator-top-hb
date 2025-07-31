# Calculator - by Haakon Beck

A responsive and fully functional calculator built using **HTML**, **CSS**, and **vanilla JavaScript**. This project was developed as part of The Odin Project curriculum. It supports basic arithmetic operations with proper user input validation and includes both button-based and keyboard-based interactions, emulating the behavior of a physical calculator.

Live Demo:  
https://beto0077.github.io/calculator-top-hb/

---

## Features

- **Arithmetic operations**: addition, subtraction, multiplication, and division
- **Responsive dual-display**: shows current user input and final result on separate lines
- **Chained operations**: continue calculating without pressing equals between operations
- **Keyboard support**: numbers, operators, Enter, Backspace, Delete, and decimal point
- **Decimal point handling**: only one decimal allowed per operand
- **Delete functionality**: removes the last character, prioritizing second operand
- **Clear functionality**: resets the entire calculation state and display
- **Rounding**: results are automatically rounded to two decimal places
- **Error prevention**: handles division by zero and improper operation attempts with user-friendly messages
- **Hover effects**: intuitive and responsive button feedback using CSS
- **Mobile and desktop compatible**: layout adjusts to screen dimensions

---

## Technologies Used

- **HTML5** - semantic markup and structure
- **CSS3** - responsive layout, color gradients, text effects, and button styling
- **JavaScript (ES6)** - event handling, arithmetic logic, keyboard support, and DOM manipulation

---

## How to Use

1. Visit the live site: https://beto0077.github.io/calculator-top-hb/
2. Enter numbers using either the calculator buttons or your keyboard
3. Choose an operator (+, -, ×, ÷) to start building your expression
4. Press "=" or hit "Enter" to calculate the result
5. Use "DEL" or the Backspace key to remove the last digit or operator
6. Press "AC" or use the Delete key to reset the calculator
7. The display updates in real-time and shows rounded results to 2 decimal places

**Note:** The calculator prevents invalid inputs such as multiple decimal points per operand or division by zero. Operator chaining is supported, allowing quick successive calculations.

---

## Project Structure

calculator-top-hb/  
├── index.html  
├── style.css  
├── script.js  
├── images/  
│   └── hb-logo.png  
└── README.md

---

## Project Purpose

This project was built to reinforce core front-end development concepts, including:

- DOM manipulation and dynamic UI updates
- Keyboard event delegation and input filtering
- Chained conditionals and operator logic
- Responsive layout design using Flexbox
- Clean, modular, and semantic code organization
- Custom error handling and user feedback

---

## Author

**Gilberto Gazo aka Haakon Beck**  
Developed as part of The Odin Project curriculum.  
Feedback and contributions are welcome via GitHub.