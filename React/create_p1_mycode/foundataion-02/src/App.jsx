
import './App.css'

function App() {

  const shows = [
    {
      id: 1,
      title: "The Witcher",
      time: "12: 00 PM",
      hall: "Hall A"
    },
    {
      id: 2,
      title: "Stranger Things",
      time: "02: 00 PM",
      hall: "Hall B"
    },
    {
      id: 3,
      title: "Game of Thrones",
      time: "04: 00 PM",
      hall: "Hall C"
    },
    {
      id: 4,
      title: "Breaking Bad",
      time: "06: 00 PM",
      hall: "Hall D"
    }
  ];


  return (
    <>
      <h1>Lets watch some shows!</h1>
      <section>
        {shows.map((show) => (
          <div key={show.id}>
            <h2>{show.title}</h2>
            <p>{show.time}</p>
            <p>{show.hall}</p>
          </div>
        ))}
      </section>
      
    </>
  )
}

export default App
