
export function Card({apiLink,name,clickFunction}){

    let srcUrl = apiLink

    function handleClick (e) {
        console.log("this is")
        console.log(e.target.key)
        clickFunction()
    }


    return (
        <>
        <div className="card" onClick={handleClick}>
        <img src={srcUrl} width="200" height="200" alt="pokemon"></img>
        <h2>{name}</h2>
        </div>
        </>
    )
}