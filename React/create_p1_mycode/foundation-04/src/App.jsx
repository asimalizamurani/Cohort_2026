
import './App.css'

function App() {

  
  let value = 3;

  function increaseValue() {
     value++;
     console.log("Value: ", value);
  }
  return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "16px"}}>
        <h2>Value: {value}</h2>
      <button
      style={{width: "100px", padding: "8px"}}
      onClick={increaseValue}
      >Click me</button>
      </div>
  )
}

export default App
