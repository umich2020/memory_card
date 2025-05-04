import { useEffect, useState } from "react"
import { Card } from "./card"
import './styles.css'

export function App() {
console.log("start")
const [allPokemon, setAllPokemon] = useState({
    ditto:{name:"ditto1", url:""},
    squirtle:{name:"squirtle1", url:""},
    eevee:{name:"eevee1", url:""}
})
const [clicked, setClicked] = useState([])

useEffect(()=>{
    console.log("render is being used")
    let promises = []
    let obj = null
    async function apiCalls() {
        for( const pokemon in allPokemon) {
                const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon
                    await fetch(url, {mode: 'cors'})
                    .then(function(response){
                        return response.json()
                    })
                    .then(function(response) {
                        const responseUrl = response["sprites"]["other"]["official-artwork"]["front_default"]
                        promises.push([[pokemon],{"name":pokemon,"url":responseUrl}])
                        obj = Object.fromEntries(promises)
                    })
                    

        }
        Promise.all(promises).then(()=>{
            console.log("the value of each obj is")
            console.log(obj)
            setAllPokemon(obj)
        })
        console.log("all pokemon is now")
        console.log(allPokemon)
    }
    apiCalls()


},[])
// getApiLink("ditto")
console.log("pokemon list is")
console.log(allPokemon)
// allPokemon.map((pokemon)=>{
   
// })
function randomize(){
    setAllPokemon({...allPokemon, pikachu:{name:"pikachu"}})
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
                Object.keys(allPokemon).map(pokemon => {
                   
                    return <Card key={[pokemon]} clickFunction={randomize} name={pokemon} apiLink={allPokemon[pokemon].url}></Card>
                    
                })
                
            }
        </div>
            
        </>
    )
}
  