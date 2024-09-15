// App.js
import React from 'react';
import Wishlist from './Wishlist';
import jsonData from './wishlist.json';
// App.js
import './App.css';
 // Assuming you have the JSON data locally

function App() {
  return (
    <div className="App">
      <Wishlist items={jsonData} />
    </div>
  );
}

export default App;

