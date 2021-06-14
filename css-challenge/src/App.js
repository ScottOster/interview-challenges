import './App.css';
import React from 'react';
import DateNow from './Date';
import ExcercisesCards from './ExcercisesCards';
import NavBAr from './NavBar';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <section className="headerContainer">
          <p className="greeting">
            Hi, Dean!<br></br>
            <DateNow></DateNow>
          </p>

          <div>
            <p className="bell">&#128276;</p>
          </div>
        </section>

        <section className="searchInputContainer">
          <input
            className="searchBar"
            type="search"
            placeholder="&#128269;search"
          ></input>
        </section>
        <h1 className="feelingsHeader">How do you feel?</h1>
        <section className="emojiFeelingsContainer">
          <div className="emojiAndTextDiv">
            <p className="emojiFeelingsButton">&#128530;</p>
            <p className="emojiText">Badly</p>
          </div>

          <div className="emojiAndTextDiv">
            <p className="emojiFeelingsButton">&#128524;</p>
            <p className="emojiText">Fine</p>
          </div>

          <div className="emojiAndTextDiv">
            <p className="emojiFeelingsButton">&#128513;</p>
            <p className="emojiText">well</p>
          </div>

          <div className="emojiAndTextDiv">
            <p className="emojiFeelingsButton">&#128516;</p>
            <p className="emojiText">Excellent</p>
          </div>
        </section>

        <ExcercisesCards />
        <NavBAr />
      </div>
    </div>
  );
}

export default App;
