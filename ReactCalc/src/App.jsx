import { useReducer } from 'react'
import './App.css'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}
function reducer (state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand}${payload}`,
      }
    case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        previousOperand: state.currentOperand,

      }

function App() {
  const [{currentOperand,previousOperand,operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
        </div>
        <button className="span-two" >AC</button>
        <button >DEL</button>
        <button>/</button>
        <DigitButton digit="1" dispatch={dispatch}/>
        <DigitButton digit="2" dispatch={dispatch}/>
        <DigitButton digit="3" dispatch={dispatch}/>
        <button>*</button>
        <DigitButton digit="4" dispatch={dispatch}/>
        <DigitButton digit="5" dispatch={dispatch}/>
        <DigitButton digit="6" dispatch={dispatch}/>
        <button>+</button>
        <DigitButton digit="7" dispatch={dispatch}/>
        <DigitButton digit="8" dispatch={dispatch}/>
        <DigitButton digit="9" dispatch={dispatch}/>
        <button>-</button>
        <button>.</button>
        <DigitButton digit="0" dispatch={dispatch}/>
        <button className="span-two">=</button>  
 
    </div>
  )
}

export default App
