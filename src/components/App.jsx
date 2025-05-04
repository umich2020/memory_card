import { useEffect, useState } from "react";
import { Card } from "./card";
import "./styles.css";

export function App() {
  console.log("start");
  const [allPokemon, setAllPokemon] = useState([
    { name: "ditto", url: "" },
    { name: "squirtle", url: "" },
    { name: "eevee", url: "" },
    { name: "charizard" },
  ]);
  const [clicked, setClicked] = useState([]);
  const [reRender, setreRender] = useState(0);

  useEffect(() => {
    // console.log("render is being used")
    let promises = [];
    let obj = null;

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
        // console.log("the value of each promise is")
        // console.log(promises)
        setAllPokemon(promises);
        // console.log("after setting poki")
        // console.log(allPokemon)
      });
      // console.log("all pokemon is now")
      // console.log(allPokemon)
    }
    apiCalls();
  }, [reRender]);
  // getApiLink("ditto")
  // console.log("pokemon list is")
  // console.log(allPokemon)

  function randomize() {
    // console.log('randomize working')
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
  function alreadyClick(pokemon){
    for(let i=0; i<clicked.length; i++){
        console.log(clicked[i].name)
        if(clicked[i].name === pokemon) {
            return true
        }
    }
    console.log('what is set clicked')
    console.log(clicked)
    console.log('pokimon is')
    console.log(pokemon)
    setClicked(...clicked, {name:pokemon})
    console.log('set clicked is now')
    console.log(setClicked)
    return false
  }

  return (
    <>
      <h1>Pokemon Memory Game</h1>
      <div id="instruction">
        <h2>Instructions:</h2>
        <p>
          Get points by clicking on an image. But don't click on a pokemon more
          than once!
        </p>
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
            ></Card>
          );
        })}
      </div>
    </>
  );
}
