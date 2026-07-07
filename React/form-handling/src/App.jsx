import React, { useState } from 'react'
import ManualForm from './ManualForm.jsx'
import HookForm from './HookForm.jsx'

import "./App.css"

const App = () => {
  const [tab, setTab] = useState("manual");

  return (
    <>
    <div className="form-container">
  <h1>Manual Form and Hook Form in React</h1>


  <button onClick={() => setTab("manual")}>
    Controlled - Manual
  </button>

  <button onClick={() => setTab("hook")}>
    React Hook Form
  </button>

  {tab === "manual" ? <ManualForm /> : <HookForm />}
</div>
    </>
  )
}

export default App