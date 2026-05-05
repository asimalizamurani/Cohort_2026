import './App.css'
import AvatarCard from './components/AvatarCard.jsx';

function App() {

  const avatars = [
    {
      id: 1,
      name: "Memo",
      role: "Optimizer",
      power: "Memomization",
      initials: "MM"
    },
    {
      id: 2,
      name: "Tabby",
      role: "Optimizer",
      power: "Tabulation",
      initials: "TB"
    },
    {
      id: 3,
      name: "Recur",
      role: "Optimizer",
      power: "Recursion",
      initials: "RC"
    },
    {
      id: 4,
      name: "Itera",
      role: "Optimizer",
      power: "Iteration",
      initials: "IT"
    },
    {
      id: 5,
      name: "Dyna",
      role: "Optimizer",
      power: "Dynamic Programming",
      initials: "DP"
    }
  ];

  function Shell({title, children}){
    return(
      <section>
        <p>Reusable Shell</p>
        <h2>{title}</h2>
        {children}
        <p>This is for test</p>
      </section>
    )
  }


  return (
    <>
    <h2>Children in React</h2>
         <Shell title="Batman">
          <p>This is inside shell</p>
          <p>This is also inside the shell</p>
         </Shell>

      <h2>Hello from Asim Ali</h2>
      <section>

        {avatars.map((avatar) => (
          <AvatarCard 
          key={avatar.id}
          level={avatar.id === 1 ? "Captain" : undefined}
          avatar={avatar}
           />
        ))}
      </section>

    </>
  )
}

export default App
