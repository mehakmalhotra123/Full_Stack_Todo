import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setjokes] = useState([])
useEffect(()=>{
  axios.get('/jokes')
  .then((res)=>{
setjokes(res.data)
  })
  .catch(()=>{
    console.log(error)
  })
},[])
  return (
    <>
      <h1>Mehak is a full stack developer</h1>
      <p>jokes: {jokes.length} </p>

      {
      jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p> {joke.content}</p>
          </div>
      ))
    }
    </>
  )
}

export default App
