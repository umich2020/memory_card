import { useEffect, useState } from "react"
import { Card } from "./card"

export function App() {
const [allPokemon, setAllPokemon] = useState({
    ditto:{name:"ditto", url:""},
    squirtle:{name:"squirtle", url:""},
    eevee:{name:"eevee", url:""}
})
const [clicked, setClicked] = useState([])
const [tempState, setTempState] = useState("")

async function getApiLink(pokemon){
    console.log("pokemon is next render")
    console.log(allPokemon)
    console.log("get api link is running")
    console.log(pokemon)
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon
    console.log("url is ")
    console.log(url)
    await fetch(url, {mode: 'cors'})
        .then(function(response){
            return response.json()
        })
        .then(function(response) {
            console.log("what about this new state")
            console.log(allPokemon)
            const newUrl = {...allPokemon.pokemon,url:response["sprites"]["other"]["official-artwork"]["front_default"]} 
            console.log('new url is')
            console.log(newUrl)
            const newPokemon = {...allPokemon, [pokemon]:newUrl}
            console.log('new pokemon is')
            console.log(newPokemon)
            setAllPokemon(newPokemon)
            //^^^^^^^ infinite loop
            // setTempState(newState)
            console.log("pokemons setted is")
            console.log(allPokemon)
        })
}
console.log("Fuck")
console.log(allPokemon)
for( const pokemon in allPokemon) {

    // getApiLink(pokemon)

}
console.log("pokemon list is")
console.log(allPokemon)
// allPokemon.map((pokemon)=>{
   
// })
    return (
        <>
        <h1>Pokemon Memory Game</h1>
        <div id="instruction">
        <h2>Instructions:</h2>
        <p>Get poitns by clicking on an image. But don't click on a pokemon more than once!</p>
        </div>
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