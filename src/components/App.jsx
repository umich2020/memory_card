import { useState } from "react"
import { Card } from "./card"

export function App() {
const [allPokemon, setAllPokemon] = useState(["ditto","squirtle","eevee"])
const [clicked, setClicked] = useState([])

const url = "https://pokeapi.co/api/v2/pokemon/ditto"
const someething = "we set this to the url to get the image(this is part of the function"
fetch(url, {mode: 'cors'})
    .then(function(response){
        return response.json()
    })
    .then(function(response) {
        console.log(response["sprites"]["other"]["official-artwork"]["front_default"])
    })
    return (
        <>
        <h1>Pokemon Memory Game</h1>
        <div id="instruction">
        <h2>Instructions:</h2>
        <p>Get poitns by clicking on an image. But don't click on a pokemon more than once!</p>
        </div>

        <Card></Card>
        </>
    )
}