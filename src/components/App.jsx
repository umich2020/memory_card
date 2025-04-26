import { useEffect, useState } from "react"
import { Card } from "./card"

export function App() {
const [allPokemon, setAllPokemon] = useState({
    ditto:{name:"ditto", url:""},
    squirtle:{name:"squirtle", url:""},
    eevee:{name:"eevee", url:""}
})
const [clicked, setClicked] = useState([])

async function getApiLink(pokemon){
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon
    await fetch(url, {mode: 'cors'})
        .then(function(response){
            return response.json()
        })
        .then(function(response) {
            const newUrl = {...allPokemon.pokemon,url:response["sprites"]["other"]["official-artwork"]["front_default"]} 
            const newPokemon = {...allPokemon, [pokemon]:newUrl}
            setAllPokemon(newPokemon)
        })
}
for( const pokemon in allPokemon) {

    //  getApiLink(pokemon)
    // ^stopped cause it causes an infinite loop

}
// getApiLink("ditto")
console.log("pokemon list is")
console.log(allPokemon)
// allPokemon.map((pokemon)=>{
   
// })
    return (
        <>
        <h1>Pokemon Memory Game</h1>
        <div id="instruction">
        <h2>Instructions:</h2>
        <p>Get points by clicking on an image. But don't click on a pokemon more than once!</p>
        </div>
        <Card key={allPokemon.ditto.name} apiLink={allPokemon.ditto.url}></Card>
        {/* {
            for( const pokemon in allPokemon) {
                console.log("help")
                return (
                    <Card key={pokemonName.name} apiLink={pokemonName.url}></Card>
                    )
            }
        } */}

        
        </>
    )
}
        // {allPokemon.map((pokemonName)=>{
        //     // console.log('what im seeing')
        //     // getApiLink(pokemonName)
        //     // console.log(tempState)

        //     return (
        //     <Card key={pokemonName.name} apiLink={pokemonName.url}></Card>
        //     )
        // })}