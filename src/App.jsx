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
  
  return (
    <>
      {data ? (
        <>
          <Card url={data[0].url}></Card>
          <Card url={data[1].url}></Card>
          <Card url={data[2].url}></Card>
          <Card url={data[3].url}></Card>
          
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default App
