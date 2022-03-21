import React from 'react';
import './App.css';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import NavBar from './Screens/GlobalComponents/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar from={{
        pathname: ''
      }} prevState={null} location={undefined} />
      <WelcomePage />
    </div>

  );
}

export default App;
