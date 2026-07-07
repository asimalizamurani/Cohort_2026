
import { useState } from 'react';
import './App.css'

function App() {

  const [value, setValue] = useState(0);

  const increaseValue = () => {
    // setValue(value + 1); // this can be better
    setValue(prev => prev + 1); // this is better because it uses the previous state value, ensuring that the update is based on the most current state, which is especially important when multiple updates are made in quick succession.
  }

  const decreaseValue = () => {
    if(value > 0) {
      setValue(value -1);
    }
  }
  return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "16px"}}>
        <h2>Value: {value}</h2>
      <button
      style={{width: "100px", padding: "8px"}}
      onClick={increaseValue}
      >Click me</button>

      <button
      style={{width: "100px", padding: "8px"}}
      onClick={decreaseValue}
      >Decrese Value</button>
      </div>
      
  )
}

export default App
