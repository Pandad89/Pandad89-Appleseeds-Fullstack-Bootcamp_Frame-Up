import React from 'react';
import './App.css';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import NavBar from './Screens/GlobalComponents/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar from={{
        pathname: ''
      }} prevState={null} location={undefined} />
      <WelcomePage />
    </>
  );
}

export default App;
