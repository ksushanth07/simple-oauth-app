import React from 'react';
import './App.css';
import { GoogleOAuth } from './GoogleOAuth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A simple OAuth application by KS</h1>
        <GoogleOAuth />
      </header>
    </div>
  );
}

export default App;
