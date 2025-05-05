import { useEffect, useState } from "react";
import { Card } from "./card";
import "../styles/styles.css";

export function App() {
  const [allPokemon, setAllPokemon] = useState([
    { name: "ditto", url: "" },
    { name: "squirtle", url: "" },
    { name: "eevee", url: "" },
    { name: "charizard" },
    {name:"hypno"},
    {name:"magneton"},
    {name:"golduck"},
    {name:"bulbasaur"},
    {name:"arcanine"},
    {name:"vulpix"},
    {name:"weezing"},
    {name:"pikachu"},
  ]);
  const [clicked, setClicked] = useState([]);
  const [reRender, setreRender] = useState(0);
  const [currentScore, setcurrentScore] = useState(0);
  const [highScore, sethighScore] = useState(0);

  useEffect(() => {
    let promises = [];

    async function apiCalls() {
      for (const pokemon of allPokemon) {
        const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon.name;

        await fetch(url, { mode: "cors" })
          .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            const responseUrl =
              response["sprites"]["other"]["official-artwork"]["front_default"];

            promises.push({ name: pokemon.name, url: responseUrl });
          });
      }
      Promise.all(promises).then(() => {
        setAllPokemon(promises);
      });
    }
    apiCalls();
  }, [reRender]);

  function randomize() {
    let arr = allPokemon;
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  function click() {
    randomize(allPokemon);
    setreRender((current) => current + 1);
  }
  function alreadyClick(pokemon) {
    for (let i = 0; i < clicked.length; i++) {
      console.log(clicked[i][0] === pokemon);
      if (clicked[i][0] === pokemon) {
        setClicked([]);
        return true;
      }
    }

    setClicked([...clicked, [pokemon]]);

    return false;
  }
  function increaseScore() {
    const newScore = currentScore + 1;
    setcurrentScore(newScore);
    if (newScore === allPokemon.length) {
      alert("you have won");
    }
    if (newScore > highScore) {
      sethighScore(() => newScore);
    }
  }
  function resetScore() {
    const score = 0;
    setcurrentScore(score);
  }
  return (
    <>
      <div id="header">
        <div id="left">
          <div id="logo">
            <img src="pokeball_png.png" id="logo_img" alt="pokeball logo"></img>
          </div>
          <div id='intro'>
            <h1>Pokemon Memory Game</h1>
            <div id="instruction">
              <h2>Instructions:</h2>
              <p>
                Get points by clicking on an image. But don't click on a pokemon
                more than once!
              </p>
            </div>
          </div>
        </div>
        <div id="scores">
          <h2>Current score: {currentScore}</h2>
          <h3>High score: {highScore}</h3>
        </div>
      </div>
      <div id="cards">
        {allPokemon.map((pokemon) => {
          return (
            <Card
              key={[pokemon.name]}
              randomize={click}
              name={pokemon.name}
              apiLink={pokemon.url}
              alreadyClick={alreadyClick}
              increaseScore={increaseScore}
              resetScore={resetScore}
            ></Card>
          );
        })}
      </div>
    </>
  );
}
