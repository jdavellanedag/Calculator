import React, { useState } from "react";
import { evaluate } from "mathjs";

export const CalculatorApp = () => {
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(0);
  const [numbers, setNumbers] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleInputNumber = (e) => {
    if (numbers === 0) {
      setNumbers(null);
      setNumbers(e.target.value);
    } else if (numbers.toString().length < 6) {
      setNumbers(numbers + e.target.value);
    }
  };

  //TODO: Fix consecutive operations
  const handleInputOperation = (value) => {
    setResult(numbers);
    setOperation(value);
    setNumbers(0);
  };

  //TODO: Fix consecutive operations after equals
  const handleResult = () => {
    if (numbers === 0 || operation === null) {
      reset();
      setShowResult(false);
    } else {
      let calculate = result + operation + numbers;
      setResult(evaluate(calculate));
      setShowResult(true);
      reset();
    }
  };

  const reset = () => {
    setNumbers(0);
    setOperation(null);
  };

  return (
    <div className="calculator">
      <div className="result">{showResult ? result : numbers}</div>
      <form className="buttons">
        <div className="row">
          <input type="button" value="7" onClick={handleInputNumber} />
          <input type="button" value="8" onClick={handleInputNumber} />
          <input type="button" value="9" onClick={handleInputNumber} />
          <input type="button" value="&divide;" onClick={() => handleInputOperation("/")} />
        </div>
        <div className="row">
          <input type="button" value="4" onClick={handleInputNumber} />
          <input type="button" value="5" onClick={handleInputNumber} />
          <input type="button" value="6" onClick={handleInputNumber} />
          <input type="button" value="&times;" onClick={() => handleInputOperation("*")} />
        </div>
        <div className="row">
          <input type="button" value="1" onClick={handleInputNumber} />
          <input type="button" value="2" onClick={handleInputNumber} />
          <input type="button" value="3" onClick={handleInputNumber} />
          <input type="button" value="&minus;" onClick={() => handleInputOperation("-")} />
        </div>
        <div className="row">
          <input type="button" value="0" onClick={handleInputNumber} />
          <input type="button" value="." onClick={handleInputNumber} />
          <input type="button" value="+" onClick={() => handleInputOperation("+")} />
          <input id="equals" type="button" value="=" onClick={handleResult} />
        </div>
      </form>
    </div>
  );
};
