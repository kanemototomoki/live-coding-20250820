import { useState } from 'react';
import '../Components.css';
import { multiplyBy2, multiplyBy3 } from './utils';

export interface CalculatorProps {
  /** 初期値 */
  initialValue?: number;
}

const isFixed = false;

const Calculator = ({ initialValue = 0 }: CalculatorProps) => {
  const [value, setValue] = useState(initialValue);

  const handleMultiplyBy2 = () => {
    const newValue = multiplyBy2(value);
    setValue(newValue);
  };

  const handleMultiplyBy3 = () => {
    const newValue = multiplyBy3(value);
    setValue(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value) || 0;
    setValue(newValue);
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="calculator-content">
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          placeholder="数値を入力してください"
          data-testid="calculator-input"
        />
        <div className={`button-group ${isFixed ? 'is-fixed' : ''}`.trim()}>
          <button
            onClick={handleMultiplyBy2}
            data-testid="multiply-by-2-button"
          >
            x2
          </button>
          <button
            onClick={handleMultiplyBy3}
            data-testid="multiply-by-3-button"
          >
            x3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
