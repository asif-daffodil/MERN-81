import { useState, useEffect } from "react"
import Person from "./Components/Person";
import axios from "axios";


function App() {

  const [number, setNumber] = useState(0);
  const [showText, setShowText] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() =>
  {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }
  , [number]);

  return (
    <>
      <button onClick={()=> setNumber(number + 1)}>+</button>
      {number}
      <button onClick={()=> setNumber(number - 1)}>-</button>
      <div>
        <input type="text" onChange={(e)=> {
          console.log(e);
          setShowText(e.target.value)
          }} />
        <div>
          {showText}
        </div>
      </div>
      {users.map((student, i) => 
      <Person name={student.name} email={student.email} key={i} />
      )}
    </>
  )
}

export default App
