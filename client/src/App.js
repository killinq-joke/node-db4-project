import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    axios.get("localhost:6000")
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="App">
      salut
      
    </div>
  );
}

export default App;
