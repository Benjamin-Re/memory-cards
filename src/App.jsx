import React, { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { Scoreboard } from './components/Scoreboard';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [clickedCards, setClickedCards] = useState([])

  useEffect(() => {
    // Check if data exists in localStorage
    const storedData = localStorage.getItem('dogImages');
    if (storedData) {
      // If data exists in localStorage, parse and set it
      setData(JSON.parse(storedData));
    } else {
      // If no data in localStorage, fetch it and store in localStorage
      fetch('https://api.thedogapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(data => {
          // Work with JSON data here
          console.log(data);
          setData(data);
          // Store data in localStorage
          localStorage.setItem('dogImages', JSON.stringify(data));
        })
        .catch(error => {
          // Handle errors here
          console.error('Fetch error:', error);
        });
    }
  }, []); // Empty dependency array to fetch data only once

  function handleClick(id) {
    console.log(`Clicked ${id}`);
    setClickedCards(prevClickedCards => [...prevClickedCards, id]); // Updater function
    if(clickedCards.includes(id)){
      console.log('Game over. You already clicked this card before')
      setClickedCards([])
    }
    shuffleCards()
  }

  function shuffleCards() {
    const copy = []
    const original = [...data]
    while(original.length > 0) {
      let i = Math.floor(Math.random() * original.length)
      if (i in original) {
        copy.push(original[i])
        original.splice(i, 1)
      }
    }
    setData(copy)
  }

  return (
    <div className='container'>
      <Scoreboard score={clickedCards.length}></Scoreboard>
      {data.length > 0 ? (
        <div className='card-container'>
          {data.map((item, index) => (
            <Card key={index} url={item.url} onClick={() => handleClick(item.id)} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
