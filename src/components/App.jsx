import { useEffect, useState } from "react"
import { Card } from "./card"
import './styles.css'

export function App() {
console.log("start")
const [allPokemon, setAllPokemon] = useState([
    {name:"ditto", url:""},
    {name:"squirtle", url:""},
    {name:"eevee", url:""},
    {name:"charizard"},
])
const [clicked, setClicked] = useState([])
const [reRender, setreRender]= useState(0)

useEffect(()=>{
    console.log("render is being used")
    let promises = []
    let obj = null
    
    async function apiCalls() {
        for( const pokemon of allPokemon) {
            console.log("api call pokemon")
            console.log(pokemon.name)
                const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon.name
               
                    await fetch(url, {mode: 'cors'})
                    .then(function(response){
                        return response.json()
                    })
                    .then(function(response) {
                        const responseUrl = response["sprites"]["other"]["official-artwork"]["front_default"]
                       
                        promises.push({name:pokemon.name,url:responseUrl})
                        console.log('what is promises')
                        console.log(promises)
                        // obj = Object.fromEntries(promises)
                        // console.log('what is object')
                        // console.log(obj)
                    })
                    

        }
        Promise.all(promises).then(()=>{
            console.log("the value of each promise is")
            console.log(promises)
            setAllPokemon(promises)
            console.log("after setting poki")
            console.log(allPokemon)
        })
        console.log("all pokemon is now")
        console.log(allPokemon)
    }
    apiCalls()


},[reRender])
// getApiLink("ditto")
console.log("pokemon list is")
console.log(allPokemon)
// allPokemon.map((pokemon)=>{
   
// })
function randomize(){
    
}
    return (
        <>
        <h1>Pokemon Memory Game</h1>
        <div id="instruction">
        <h2>Instructions:</h2>
        <p>Get points by clicking on an image. But don't click on a pokemon more than once!</p>
        </div>
        <div id="cards">

  
            {
                allPokemon.map(pokemon => {
                    console.log('all pokimon is')
                    console.log(allPokemon)
                    console.log("pokimon name is lmao")
                   console.log(pokemon)
                    return <Card key={[pokemon.name]} clickFunction={randomize} name={pokemon.name} apiLink={pokemon.url}></Card>
                    
                })
                
            }
        </div>
            
        </>
    )
}
  