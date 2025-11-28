import { useEffect, useState } from "react"
import axios from "axios"
function App() {
  const [jokes,setjokes]=useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data)
      console.log(response.data)
    })
    .catch((error)=>{
          console.log(error)
    })

  },[])
  return (
    <>
    <h1>Read Jokes here </h1>
    <p>
      jokes:{jokes.length}
    </p>
    {
      jokes.map((item,index)=>(
        <div key={item.id}>
          <h3>{item.setup}</h3>
          <h3>{item.punchline}</h3>


        </div>
      ))
    }
    </>
  )
}

export default App
