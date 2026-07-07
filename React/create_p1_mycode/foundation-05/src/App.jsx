import { useEffect } from "react";
import { useState } from "react"


function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [seconds, setSeconds] = useStatte(10);

  useEffect(() => {

    setInterval(() => {
      setSeconds((current) => Math.max(current - 1, 0))
    }, 1000);
    return () => {
      
    }
  })

  return (
    <>
     <h1>useEffect</h1>
     
    </>
  )
}

export default App
