import PropTypes from 'prop-types';
import '../styles/Calculator.css';

const Calculator = () => (
  <>
    <div className="calculator">
      <div className="output">0</div>
      <div className="inputs">
        <CalculatorButton name="AC" />
        <CalculatorButton name="+/-" />
        <CalculatorButton name="%" />
        <CalculatorButton name="÷" operator />
        <CalculatorButton name="7" />
        <CalculatorButton name="8" />
        <CalculatorButton name="9" />
        <CalculatorButton name="x" operator />
        <CalculatorButton name="4" />
        <CalculatorButton name="5" />
        <CalculatorButton name="6" />
        <CalculatorButton name="-" operator />
        <CalculatorButton name="1" />
        <CalculatorButton name="2" />
        <CalculatorButton name="3" />
        <CalculatorButton name="+" operator />
        <CalculatorButton name="0" />
        <CalculatorButton name="." />
        <CalculatorButton name="=" operator />
      </div>
    </div>
  </>
);

function CalculatorButton({ name, operator }) {
  return (<button type="button" className={operator ? 'operator' : 'operand'}>{name}</button>);
}

CalculatorButton.defaultProps = {
  operator: false,
};

CalculatorButton.propTypes = {
  name: PropTypes.string.isRequired,
  operator: PropTypes.bool,
};

export default Calculator;
