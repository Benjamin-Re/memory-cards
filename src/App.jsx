import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => {
      // Work with JSON data here
      console.log(data);
      setData(data)
    })
    .catch(error => {
      // Handle errors here
      console.error('Fetch error:', error);
    });
  }, []) // Empty dependency array means only run once

  return (
    <>
      {data ? (
        <>
          <p>Data: {data.species.name}</p>
          <img src={data.sprites.front_default} alt="Sprite of Ditto Pokemon"/>
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default App
