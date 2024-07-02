import React, { useState } from 'react';

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(null);

  const addNumber = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setNumbers([...numbers, value]);
    }
  };

  const calculateAverage = () => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const avg = sum / numbers.length;
    setAverage(avg.toFixed(2)); // Round to 2 decimal places
  };

  return (
    <div>
      <h2>Average Calculator</h2>
      <div>
        <label>Enter numbers:</label>
        <input type="number" onChange={addNumber} />
        <button onClick={calculateAverage}>Add</button>
      </div>
      {numbers.length > 0 && (
        <div>
          <h3>Entered numbers:</h3>
          <ul>
            {numbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
          <h3>Average:</h3>
          <p>{average !== null ? average : 'Calculate average'}</p>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
