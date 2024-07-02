// src/App.js
import React from 'react';
import './App.css';
import TopProducts from './TopProducts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Top Products App</h1>
      </header>
      <main>
        <TopProducts />
      </main>
    </div>
  );
}

export default App;
