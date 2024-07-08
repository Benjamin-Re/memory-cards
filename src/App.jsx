import { useState, useEffect } from 'react'
import { Card } from './components/Card'

import './App.css'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/images/search?limit=10')
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
  
  function handleClick() {
    console.log('click')
  }

  return (
    <>
      {data ? (
        <>
          {data.map((item, index) => {
            return <Card url={item.url} key={index} onClick={handleClick}></Card>
          })}
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default App
