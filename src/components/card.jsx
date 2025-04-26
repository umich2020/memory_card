
export function Card(apiLink){
    console.log('api link is')
    console.log(apiLink)
    return (
        <>
        <div className="card">
        <img src={apiLink} width="200" height="200" alt="pokemon"></img>
        <h2>Pokemon name</h2>
        </div>
        </>
    )
}