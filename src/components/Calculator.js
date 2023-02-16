import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.name));
  };

  return (
    (
      <>
        <div className="calculator">
          <div className="output">
            <span>{state.total}</span>
            <span>{state.operation}</span>
            <span>{state.next}</span>
          </div>
          <div className="inputs">
            <CalculatorButton click={handleClick} name="AC" />
            <CalculatorButton click={handleClick} name="+/-" />
            <CalculatorButton click={handleClick} name="%" />
            <CalculatorButton click={handleClick} name="÷" operator />
            <CalculatorButton click={handleClick} name="7" />
            <CalculatorButton click={handleClick} name="8" />
            <CalculatorButton click={handleClick} name="9" />
            <CalculatorButton click={handleClick} name="x" operator />
            <CalculatorButton click={handleClick} name="4" />
            <CalculatorButton click={handleClick} name="5" />
            <CalculatorButton click={handleClick} name="6" />
            <CalculatorButton click={handleClick} name="-" operator />
            <CalculatorButton click={handleClick} name="1" />
            <CalculatorButton click={handleClick} name="2" />
            <CalculatorButton click={handleClick} name="3" />
            <CalculatorButton click={handleClick} name="+" operator />
            <CalculatorButton click={handleClick} name="0" />
            <CalculatorButton click={handleClick} name="." />
            <CalculatorButton click={handleClick} name="=" operator />
          </div>
        </div>
      </>
    )
  );
};

function CalculatorButton({ name, operator, click }) {
  return (<button type="button" name={name} onClick={click} className={operator ? 'operator' : 'operand'}>{name}</button>);
}

CalculatorButton.defaultProps = {
  operator: false,
};

CalculatorButton.propTypes = {
  name: PropTypes.string.isRequired,
  operator: PropTypes.bool,
  click: PropTypes.func.isRequired,
};

export default Calculator;
