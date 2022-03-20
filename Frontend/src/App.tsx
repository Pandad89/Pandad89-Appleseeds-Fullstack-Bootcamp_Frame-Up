import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomePage from './Components/Welcome-Page/WelcomePage';
import Movies from './Components/List-Pages/Movie-List/Movies';

function App() {
  return (
    <div className="App">
      <Movies />
    </div>
  );
}

export default App;
