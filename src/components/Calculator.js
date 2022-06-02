import React, {useState} from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

let count = 1;
const Calculator = (props) => {
  const [state, setState] = useState(props.obj);
  return (
    <div className="main-container">
      <div className="console">{state.total}{state.operation}{state.next}</div>
      {props.data.map((i) => {
        return <button onClick={()=>
          setState(calculate(state, i))} key={(count += 1)}>{i}</button>
      })}
    </div>
  );
}

Calculator.propTypes = {
  data: PropTypes.string.isRequired,
  initialState: PropTypes.string.isRequired,
  newState: PropTypes.func.isRequired,
  obj: PropTypes.string.isRequired
};

export default Calculator;
