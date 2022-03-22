import React from 'react';
import './App.css';
import WelcomePage from './Components/Welcome-Page/WelcomePage';
import Movies from './Components/List-Pages/Movie-List/Movies';
import NavBar from './Screens/GlobalComponents/NavBar/NavBar';
import SummaryPage from "./Components/SummaryPage/SummaryPage"

function App() {
  return (
    <>
      <div className="App">
        <NavBar from={{
          pathname: ''
        }} prevState={null} location={undefined} />
        <SummaryPage />
      </div>
    </>
  )
}

export default App;
