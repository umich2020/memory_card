
export function Card({apiLink,name,randomize,alreadyClick,increaseScore,resetScore}){

    let srcUrl = apiLink
    if(srcUrl === ""){
        srcUrl = null
    }

    function handleClick () {
        //if already click === true {
        //}

        // console.log("this is")
        // console.log(name)
        const clicked = alreadyClick(name)
        if(clicked) {
            // console.log("this has already been clicked")
            resetScore()
        } 
        else {
            // console.log('this has yet to be clicked')
            increaseScore()
        }
        // console.log(e.currentTarget.key)
        randomize()
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