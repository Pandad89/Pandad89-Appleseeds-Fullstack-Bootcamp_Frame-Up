import React from 'react';
import './App.css';
import WelcomePage from './Components/Welcome-Page/WelcomePage';
import Movies from './Components/List-Pages/Movie-List/Movies';
import NavBar from './Screens/GlobalComponents/NavBar/NavBar';

function App() {
  return (
    <>
      <div className="App">
        <NavBar from={{
          pathname: ''
        }} prevState={null} location={undefined} />
        <Movies />
      </div>
    </>
  )
}

export default App;
