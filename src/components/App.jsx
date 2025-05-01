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
// useEffect(()=>{
//     let promises = "test"
//     console.log(promises)
//     // eslint-disable-next-line no-unexpected-multiline
//     (async () => {
//         for( const pokemon in allPokemon) {
//             const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon
//              const pokemonPromise = await fetch(url, {mode: 'cors'})
//              promises.push(pokemonPromise)
//     }
//     })();

// console.log('promises is ')
// console.log(promises)

// },[])
useEffect(()=>{
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
        Promise.all(promises).then((values)=>{
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
const loadPokemon = () => {
    
}
    return (
        <>
        <h1>Pokemon Memory Game</h1>
        <div id="instruction">
        <h2>Instructions:</h2>
        <p>Get points by clicking on an image. But don't click on a pokemon more than once!</p>
        </div>
        {/* {console.log("help me")
                    for (const pokemon in allPokemon){
                        return  (<> <Card key={allPokemon.pokemon} apiLink={allPokemon.pokemon.url}></Card> )
                        </>}
        } */}

    {console.log("this is start of console")}
    {console.log()}
            {
                Object.keys(allPokemon).map((pokemon) => {
                    return (
                        <>
                        <Card key={pokemon} apiLink={allPokemon.pokemon.url}>test</Card>
                        <div>test</div>
                        </>
                    )
                    
                    
                })
            }
        <Card key={allPokemon.ditto.name} apiLink={allPokemon.ditto.url}></Card>
        {/* {allPokemon.map((pokemon) => (
            <h2 key={pokemon}>{pokemon}</h2>
        ))} */}
        {/* <div>{loadPokemon()}</div> */}
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