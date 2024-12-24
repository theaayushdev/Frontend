import React, { useState } from "react";
import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="app">
      <header className={`app-header ${isClicked ? 'active' : ''}`}>
        <h1>Welcome to React!</h1>
        <p>Click the button to change the theme!</p>
        <button onClick={toggleClick} className="toggle-btn">
          {isClicked ? "Reset" : "Change Theme"}
        </button>
      </header>
    </div>
  );
}

export default App;
