import React, { useState, useEffect } from 'react';
import { Card } from './components/Card';

function App() {
  const [data, setData] = useState([]);

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

  function handleClick() {
    console.log('click');
  }

  return (
    <>
      {data.length > 0 ? (
        <>
          {data.map((item, index) => (
            <Card key={index} url={item.url} onClick={handleClick} />
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
