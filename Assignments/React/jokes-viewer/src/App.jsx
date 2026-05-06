import { useEffect } from "react";
import { useState } from "react";



function App() {

  const [jokes, setJokes] = useState([]);

  const fetchJokes = async () => {
    try {
      const response = await fetch(`https://api.freeapi.app/api/v1/public/randomjokes`);
      const data = await response.json();
      setJokes(data.data.data);
      console.log(data.data.data);
      
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  }

  useEffect(() => {
    fetchJokes();
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>Jokes Viewer App</h1>
      {jokes.map((joke) => (
        <div
         key={joke.id}
         style={{
          border: "2px solid grey", borderRadius: "14px", margin: "20px", padding: "10px", width: "250px"
         }}
         >
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App
