import { useEffect, useState } from "react"
import { Card } from "./card"

export function App() {
console.log("start")
const [allPokemon, setAllPokemon] = useState({
    ditto:{name:"ditto1", url:""},
    squirtle:{name:"squirtle1", url:""},
    eevee:{name:"eevee1", url:""}
})
const [clicked, setClicked] = useState([])

async function getApiLink(pokemon){
    const pokemonName = pokemon.name
    console.log('pokemon name is')
    console.log(pokemon.name)

    console.log('but pokemon is')
    console.log(pokemon)
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon
    await fetch(url, {mode: 'cors'})
    //so allegeldy this return a promise. then i json it right?
    //and then cuz response just a promise i think

        .then(function(response){
            console.log("allPokemon is")
            console.log(allPokemon)
            console.log('response is')
            console.log(response)
            return response.json()
        })
        .then(function(response) {
            const responseUrl = response["sprites"]["other"]["official-artwork"]["front_default"]
            // console.log('response url is')
            // console.log(responseUrl)=> yeah this works

            // setAllPokemon((prevPokemon)=> ({...prevPokemon, ditto:responseUrl}))
            // setAllPokemon((prevPokemon)=> ({...prevPokemon, squirtle[url]:responseUrl}))
            // console.log("allPokemon is")
            // console.log(allPokemon)


            const newUrl = {...allPokemon.pokemon,url:responseUrl} 
            console.log('new url object is ')
            console.log(newUrl)
            console.log('what is pokemon')
            console.log(pokemon)
            console.log(typeof pokemon)            
            console.log('what is pokemon url')
            console.log(pokemon.name)
            // console.log(typeof pokemon)
            const newPokemon = {...allPokemon, [pokemon]:newUrl}
            // return newPokemon
            setAllPokemon((prevPokemon)=>({...prevPokemon,[pokemon.url]:responseUrl}))

        })
}
useEffect(()=>{
    let temp = ""
    for( const pokemon in allPokemon) {

         getApiLink(pokemon)
        // ^stopped cause it causes an infinite loop
    }
    console.log('after api')
    return () => {
        // console.log('setting new pokemon clean up funciton')
        // await setAllPokemon(temp)
        // console.log(allPokemon)
    }
},[])

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
        <Card key={allPokemon.ditto} apiLink={allPokemon}></Card>
        {/* <Card key={allPokemon.ditto.name} apiLink={allPokemon.ditto.url}></Card> */}
        {console.log("everything is being ran first and then it's api issues")}
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