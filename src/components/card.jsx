
export function Card({apiLink,name}){
    console.log("api link is passing to src")
    console.log(apiLink)
    let srcUrl = apiLink
    return (
        <>
        <div className="card">
        <img src={srcUrl} width="200" height="200" alt="pokemon"></img>
        <h2>{name}</h2>
        </div>
        </>
    )
}