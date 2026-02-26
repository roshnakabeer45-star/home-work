


import React, { useState } from "react";

function App() {

  
  const foods = ["Pizza", "Burger", "Biryani", "Pasta"];

  
  const [message, setMessage] = useState("Select a food that you love!");

  
  const handleClick = (foodName) => {
    setMessage("I love " + foodName + "!");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>My Favorite Foods</h1>

    
      {foods.map((food, index) => (
        <div key={index} style={{ margin: "10px" }}>
          {food}
          <button 
            onClick={() => handleClick(food)}
            style={{ marginLeft: "10px" }}
          >
            Click
          </button>
        </div>
      ))}

      
      <h2 style={{ marginTop: "20px", color: "green" }}>
        {message}
      </h2>
    </div>
  );
}

export default App;