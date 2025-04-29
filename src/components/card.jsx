
export function Card(apiLink){
    console.log("api link is passing to src")
    console.log(apiLink)
    console.log(apiLink.apiLink.value)
    let srcUrl = apiLink.apiLink.value
    srcUrl = "lol"
    return (
        <>
        <div className="card">
        <img src={srcUrl} width="200" height="200" alt="pokemon"></img>
        <h2>Pokemon name</h2>
        </div>
        </>
    )
}