import React from 'react';
import './App.css';
import NavBar from './Screens/GlobalComponents/NavBar/NavBar';

function App() {
  return (
      <NavBar from={{
        pathname: ''
      }} prevState={null} location={undefined}/>
  );
}

export default App;
