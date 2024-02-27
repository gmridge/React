import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumChange = (e, num) => {
    if (num === 1) {
      setNum1(e.target.value);
    } else {
      setNum2(e.target.value);
    }
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operator) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case '*':
        setResult(number1 * number2);
        break;
      case '/':
        if (number2 === 0) {
          setResult("Error: Cannot divide by zero!");
        } else {
          setResult(number1 / number2);
        }
        break;
      default:
        setResult("Invalid. Try Again");
    }
  };

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => handleNumChange(e, 1)} />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="">Select operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={(e) => handleNumChange(e, 2)} />
      <button onClick={calculate}>=</button>
      <div>Result: {result}</div>
    </div>
  );
}

export default Calculator;