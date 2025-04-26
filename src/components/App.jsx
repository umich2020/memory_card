import { useState } from "react"
import { Card } from "./card"

export function App() {
const [allPokemon, setAllPokemon] = useState(["ditto","squirtle","eevee"])
const [clicked, setClicked] = useState([])
const [tempState, setTempState] = useState("")

async function getApiLink(name="ditto"){
   
    console.log("get api link is running")
    const url = "https://pokeapi.co/api/v2/pokemon/"+name
    let result = ""
    await fetch(url, {mode: 'cors'})
        .then(function(response){
            return response.json()
        })
        .then(function(response) {
            // setTempState({...tempState,value:response["sprites"]["other"]["official-artwork"]["front_default"]} )
            // setTempState(newState)
            console.log("temp state is")
            console.log(tempState)
        })
}

    return (
        <>
        <h1>Pokemon Memory Game</h1>
        <div id="instruction">
        <h2>Instructions:</h2>
        <p>Get poitns by clicking on an image. But don't click on a pokemon more than once!</p>
        </div>
        {allPokemon.map((pokemonName)=>{
            console.log('what im seeing')
            getApiLink(pokemonName)
            console.log(tempState)

            return (
            <Card key={pokemonName} apiLink={tempState}></Card>
            )
        })}
        
        </>
    )
}